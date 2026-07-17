# 003 — Match opacity easing to transform easing on entrance transitions

- **Status**: DONE
- **Commit**: e291e34
- **Severity**: LOW
- **Category**: Easing & duration / Cohesion
- **Estimated scope**: 3 files, 1 line changed each

## Problem

Three entrance transitions in this codebase pair `opacity` with `transform`
on the same element, animating together — but each uses a different, weaker
easing curve for `opacity` than for `transform`. Per this repo's own
decision rule ("Entering or exiting → `ease-out`"), both halves of an
entrance should use the same strong easing; splitting them means the fade
and the movement finish at visibly different rates, which is the kind of
inconsistency that's invisible in a screenshot but reads as slightly "off"
in motion.

```css
/* src/styles/global.css:236 — current */
[data-reveal] {
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.5s ease, transform 0.55s var(--ease-out);
}
```

```css
/* src/components/GroupChat.astro:158 — current */
.chat-msg,
.chat-typing {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  opacity: 0;
  transform: translateY(8px);
  visibility: hidden;
  transition: opacity 0.3s ease, transform 0.35s var(--ease-out);
}
```

```css
/* src/components/ChatCarousel.astro:127 — current */
.chat-insight-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-6);
  background: rgba(10, 14, 20, 0);
  border-radius: var(--radius-lg);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s ease, background 0.4s ease;
}
```

`[data-reveal]` is the highest-leverage of the three — it's the shared
scroll-reveal primitive used on nearly every `<section>` on every page, so
this one-line fix compounds across the whole site.

## Target

```css
/* target — src/styles/global.css:236 */
[data-reveal] {
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.5s var(--ease-out), transform 0.55s var(--ease-out);
}
```

```css
/* target — src/components/GroupChat.astro:158 */
.chat-msg,
.chat-typing {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  opacity: 0;
  transform: translateY(8px);
  visibility: hidden;
  transition: opacity 0.3s var(--ease-out), transform 0.35s var(--ease-out);
}
```

```css
/* target — src/components/ChatCarousel.astro:127 */
.chat-insight-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-6);
  background: rgba(10, 14, 20, 0);
  border-radius: var(--radius-lg);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s var(--ease-out), background 0.4s ease;
}
```

Note: `ChatCarousel.astro`'s `background` sub-property (the dark scrim
color fade, not a movement) is left on plain `ease` deliberately — that's
a color/backdrop fade, not paired with a `transform` on this same rule
(the dialog's own `transform` scale-in lives in a separate rule,
`.chat-insight-dialog`, one block below, and already correctly uses
`var(--ease-out)` — leave it untouched). Only `opacity` changes here.

## Repo conventions to follow

- `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)` is defined in
  `src/styles/tokens.css` and referenced everywhere in this codebase as
  `var(--ease-out)` — do not hardcode the cubic-bezier value, use the token.
- The exemplar this fix should make everything else look like:
  `src/pages/index.astro` (search `--ease-out`) already pairs opacity and
  transform on the same easing in several places added in a prior pass —
  e.g. the `.more-door:hover` rule uses `var(--ease-out)` consistently for
  both its `transform` and treats `box-shadow` (a non-movement property)
  with plain `ease`, which is the same pattern this plan applies to the
  three locations above.

## Steps

1. `src/styles/global.css`: find `[data-reveal] {` (search for `data-reveal`, currently line 235-239). Change `opacity 0.5s ease` to `opacity 0.5s var(--ease-out)` in the `transition` line. Leave `transform 0.55s var(--ease-out)` as is.
2. `src/components/GroupChat.astro`: find `.chat-msg,\n.chat-typing {` (search for `chat-typing {`, currently around line 153-165). Change `opacity 0.3s ease` to `opacity 0.3s var(--ease-out)` in the `transition` line. Leave `transform 0.35s var(--ease-out)` as is.
3. `src/components/ChatCarousel.astro`: find `.chat-insight-overlay {` (search for `chat-insight-overlay`, currently around line 118-132). Change `opacity 0.4s ease` to `opacity 0.4s var(--ease-out)` in the `transition` line. Leave `background 0.4s ease` as is — do not change the background sub-property.

## Boundaries

- Do NOT change any duration values — only the easing keyword/token for the `opacity` sub-property in these three rules.
- Do NOT touch `ChatCarousel.astro`'s `.chat-insight-dialog` rule (the dialog box itself, not the overlay backdrop) — it already correctly uses `var(--ease-out)` on its `transform`.
- Do NOT touch `Hero.astro:130` (`#hero-main, #hero-accent, #hero-lead { transition: opacity 0.3s ease; }`) — that's a standalone opacity crossfade with no paired `transform` on the same rule, so there's no easing mismatch to fix there; leave it as `ease`.
- Do NOT touch the `background 0.4s ease` sub-property in `ChatCarousel.astro`'s `.chat-insight-overlay` — only `opacity` changes in that rule.
- If any of the three `transition` lines don't match the "current" code shown above (drift since commit `e291e34`), STOP and report instead of guessing at the new line.

## Verification

- **Mechanical**: `npm run build` — expect success, no errors.
- **Feel check**:
  1. Reload the homepage, scroll slowly past 2-3 `[data-reveal]` sections — the fade-in and the upward slide should now visibly complete at the same moment (before this fix, opacity finished slightly differently-paced than the movement since it used a weaker curve).
  2. In Chrome DevTools Animations panel, trigger a `[data-reveal]` section into view, then set playback speed to 10% and scrub — confirm both the opacity and transform curves now show the same "fast start, gentle settle" shape (not one linear-ish and one snappy).
  3. Scroll to the WhatsApp carousel, let a conversation auto-play to completion — confirm the insight dialog's dark backdrop fades in with the same snap-then-settle feel as its dialog box scaling in (previously the backdrop's opacity felt slightly slower/flatter to start).
  4. Trigger a chat message entrance (reload the page, let the carousel auto-start, watch the first few messages appear) — confirm each bubble's fade and slide-up now read as one unified motion.
- **Done when**: all three locations show `var(--ease-out)` on their `opacity` transition, `npm run build` succeeds, and in slow-motion playback the opacity and transform components of each entrance visibly complete in sync.
