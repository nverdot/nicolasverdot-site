# 001 — Reduced-motion should drop movement, not all feedback

- **Status**: DONE
- **Commit**: e291e34
- **Severity**: MEDIUM
- **Category**: Accessibility
- **Estimated scope**: 1 file (`src/styles/global.css`), ~15 lines changed

## Problem

`src/styles/global.css:355-361` currently reads:

```css
/* src/styles/global.css:355 — current */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
```

This nukes **every** transition and animation on the site to near-zero for
users who have `prefers-reduced-motion: reduce` set — including transitions
that are pure opacity/color feedback with no movement component. The
project's own accessibility rule (documented in every skill this repo's
motion work follows) is: "Reduced motion means fewer and gentler animations,
not zero — keep transitions that aid comprehension, remove position
changes." A blanket `*` override does the opposite: it removes comprehension
aids (a button's press-state fade, a newly-revealed section's opacity
fade-in, a status message's arrival) along with the movement.

This matters concretely for at least these elements, all of which pair a
`transform` (movement — should drop) with `opacity` (comprehension —
should stay), and which currently both get flattened to ~0:

- `src/styles/global.css:236` — `[data-reveal]` (opacity 0.5s + translateY 0.55s), fires on every section of every page
- `src/styles/global.css:249-256` — `.cards .card` stagger entrance (`card-in` keyframe: opacity + translateY)
- `src/components/GroupChat.astro:158-165` — chat message/typing bubble entrance (opacity + translateY)
- `src/components/ChatCarousel.astro:127-131` — insight dialog overlay (opacity + background)

Decorative, purely-movement `@keyframes` loops should legitimately stop
under reduced motion — `marquee-scroll` (`global.css:278`), `grain-drift`
(`global.css:287`), `drift-wiggle` (`global.css:268`). The current blanket
rule is *correct* for these three; the problem is it also flattens the four
transition-based patterns above, where the opacity half should survive.

## Target

Two changes:

1. Keep the animation-duration kill (it's correct for the decorative
   keyframe loops), but drop the blanket `transition-duration` kill from the
   universal `*` selector.
2. Add targeted overrides for the specific transform-carrying transition
   patterns, neutralizing only their `transform`, not their `opacity`.

```css
/* target — src/styles/global.css, replacing the current block at line 355 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }

  /* Movement drops; opacity (comprehension) keeps its normal transition. */
  [data-reveal] {
    transform: none !important;
  }
  [data-reveal].is-visible .cards .card {
    animation-name: none !important;
    opacity: 1 !important;
  }
  .chat-msg,
  .chat-typing {
    transform: none !important;
  }
  .chat-insight-dialog {
    transform: none !important;
  }
}
```

Note: `[data-reveal].is-visible .cards .card` uses an `animation` (not a
`transition`) for its stagger entrance, so `animation-duration: 0.001ms`
from the first rule already collapses its timing — but because the
keyframe's `from` state has `opacity: 0`, a near-zero animation duration
still means the element is invisible for 0.001ms then snaps to opacity 1,
which is fine (effectively instant, not jarring, and matches "drop the
choreography, keep the end state"). The explicit `opacity: 1 !important`
above is a defensive belt-and-braces in case any browser paints the single
remaining frame at 0 — verify in the feel check below whether it's actually
needed; if the cards render fully visible without it, you may omit it to
keep the diff smaller.

## Repo conventions to follow

- Reduced-motion handling lives in one place: `src/styles/global.css`, in
  the `@media (prefers-reduced-motion: reduce)` block near the end of the
  token/base-style section (currently lines 355-361). Keep it there.
- Don't introduce a new easing or duration token for this — these are
  `!important` overrides that remove motion, not new motion.
- `[data-reveal]` is the site's shared scroll-reveal primitive, used on
  nearly every `<section>` across every page (`src/pages/*.astro`,
  `src/components/*.astro`) — changing it here is a global, one-place fix,
  not something to repeat per-page.

## Steps

1. Open `src/styles/global.css`, locate the `@media (prefers-reduced-motion: reduce)` block (search for `prefers-reduced-motion`, currently at line 355).
2. Replace the block's contents exactly as shown in **Target** above.
3. Do not touch any other part of the file in this pass.

## Boundaries

- Do NOT touch `marquee-scroll`, `grain-drift`, or `drift-wiggle` — they are correctly stopped by the `animation-duration: 0.001ms` rule and need no further override.
- Do NOT add a JS-based `useReducedMotion`-style check anywhere — this is a static Astro site with zero client-side framework state; the fix is CSS-only.
- Do NOT change the non-reduced-motion behavior of any of the four patterns listed in Problem — this plan only adds an override inside the `prefers-reduced-motion: reduce` media query.
- If the `[data-reveal]`, `.chat-msg`/`.chat-typing`, or `.chat-insight-dialog` selectors have drifted (different class names, different property split) since commit `e291e34`, STOP and report instead of guessing at new selectors.

## Verification

- **Mechanical**: `npm run build` — expect it to complete with no errors (this is a CSS-only change, nothing should fail).
- **Feel check**:
  1. In Chrome DevTools, open the Rendering panel (Cmd+Shift+P → "Show Rendering"), set "Emulate CSS media feature prefers-reduced-motion" to `reduce`.
  2. Reload the homepage. Scroll down slowly and confirm every `[data-reveal]` section's content is immediately fully opaque and does **not** slide up from below — no `translateY` movement, but also no flash-of-invisible-content (it should just be there, opacity 1, from the moment it enters the viewport).
  3. Scroll to the "Trois portes d'entrée" cards grid — confirm the 3 cards render fully visible with no stagger delay and no slide-in.
  4. Scroll to the WhatsApp carousel (`Ce qui se dit vraiment`), let a conversation play out to its end (or click a dot to switch slides) — confirm the "Regard d'expert" insight dialog appears without a scale/slide, but still visibly appears (not stuck at opacity 0).
  5. With reduced-motion still on, click a `.btn` or `.filter-btn` and hold — confirm the `:active` press-scale feedback (`transform: scale(0.97)`) is now suppressed too (it inherits the blanket `animation-duration`/no explicit exemption — this is correct, press feedback is itself a small movement and reduced-motion users should get an instant state change here, not a scaled-down button).
  6. Turn "Emulate prefers-reduced-motion" back to "No emulation" and re-check the same four moments — confirm all original motion (translateY reveal, card stagger, chat bubble slide-in, insight dialog scale-in) is fully intact, unchanged from before this plan.
- **Done when**: reduced-motion users see every piece of content that non-reduced-motion users see, at the same final position and opacity, with zero position/scale animation and zero flash-of-invisible-content; non-reduced-motion behavior is pixel-identical to before this change.
