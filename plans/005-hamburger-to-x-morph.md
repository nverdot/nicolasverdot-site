# 005 — Morph the mobile hamburger icon into an X on open

- **Status**: DONE
- **Commit**: e291e34
- **Severity**: Missed opportunity (additive)
- **Category**: Missed opportunities / State indication
- **Estimated scope**: 1 file (`src/components/Header.astro`), CSS only

## Problem

The mobile nav toggle (`src/components/Header.astro:23-25`) is a
checkbox-driven hamburger icon:

```astro
<!-- src/components/Header.astro:23-25 — current, unchanged by this plan -->
<input type="checkbox" id="nav-toggle" class="nav-toggle" />
<label for="nav-toggle" class="nav-toggle-label" aria-label="Ouvrir le menu">
  <span></span>
</label>
```

Three bars: `::before` (top), `<span>` (middle), `::after` (bottom):

```css
/* src/components/Header.astro:134-156 — current */
.nav-toggle,
.nav-toggle-label {
  display: none;
}

@media (max-width: 1000px) {
  .nav-toggle-label {
    display: flex;
    cursor: pointer;
    width: 28px;
    height: 22px;
    flex-direction: column;
    justify-content: space-between;
  }
  .nav-toggle-label span,
  .nav-toggle-label::before,
  .nav-toggle-label::after {
    content: '';
    display: block;
    height: 2px;
    background: var(--color-navy);
    border-radius: 1px;
  }
  /* ... .main-nav rules follow, unaffected by this plan ... */
  .nav-toggle:checked ~ .main-nav {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    pointer-events: auto;
    transition: opacity 0.2s ease, transform 0.25s var(--ease-out), visibility 0s;
  }
}
```

When `.nav-toggle:checked` opens the menu panel (which already animates
correctly — see the `.main-nav` transition above, already using the right
asymmetric timing), the icon itself stays three flat static bars. Nothing
about the icon confirms the toggle's own state; only the panel appearing
underneath it does. This is a textbook state-indication gap — the icon that
controls the state should reflect it.

## Target

Switch the three bars from flex-spaced (`justify-content: space-between`)
to absolutely-positioned within a `position: relative` label, so they can
independently rotate/translate into an X shape. On `:checked`, the top bar
rotates and slides to the center, the middle bar fades out, the bottom bar
rotates the opposite way and slides to the center.

```css
/* target — src/components/Header.astro, replacing the block at lines 134-156 */
.nav-toggle,
.nav-toggle-label {
  display: none;
}

@media (max-width: 1000px) {
  .nav-toggle-label {
    display: block;
    position: relative;
    cursor: pointer;
    width: 28px;
    height: 22px;
  }
  .nav-toggle-label span,
  .nav-toggle-label::before,
  .nav-toggle-label::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--color-navy);
    border-radius: 1px;
    transition: transform 200ms var(--ease-out), opacity 200ms ease;
  }
  .nav-toggle-label::before {
    top: 0;
  }
  .nav-toggle-label span {
    top: 10px;
  }
  .nav-toggle-label::after {
    top: 20px;
  }

  .nav-toggle:checked ~ .nav-toggle-label::before {
    transform: translateY(10px) rotate(45deg);
  }
  .nav-toggle:checked ~ .nav-toggle-label span {
    opacity: 0;
  }
  .nav-toggle:checked ~ .nav-toggle-label::after {
    transform: translateY(-10px) rotate(-45deg);
  }

  /* ... .main-nav rules stay exactly as they are today, unchanged ... */
}
```

Note the selector direction: `.nav-toggle:checked ~ .nav-toggle-label`
works because in the markup, `<input id="nav-toggle">` and `<label
class="nav-toggle-label">` are siblings with the input first (see Problem
section markup) — the checkbox's `:checked` state can select its following
sibling label via `~`. This is the same sibling-selector mechanism the
existing `.nav-toggle:checked ~ .main-nav` rule already relies on one block
below — copy that pattern exactly, don't invent a different selector shape.

## Repo conventions to follow

- `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)` from `src/styles/tokens.css` — use `var(--ease-out)` for the transform transitions, matching every other UI transform in this codebase.
- 200ms duration matches this repo's documented budget for state-indication icon changes (100-300ms) and is close to `var(--duration-hover)` (`0.2s`, defined in `tokens.css`) — you may use `var(--duration-hover)` in place of the literal `200ms` if you prefer consistency with the token, either is acceptable since they're numerically identical.
- The `.nav-toggle:checked ~ .main-nav` sibling-selector pattern one block below in the same file is the exemplar for how `:checked` state cascades to siblings in this component — the new rules above follow the identical shape.
- Do not introduce a new SVG icon or icon library — this codebase draws all icons as inline `<svg>` (see the theme-toggle sun/moon icons a few lines above in the same file) or, as here, as plain CSS `::before`/`span`/`::after` bars — stay with the CSS-bars approach already in place.

## Steps

1. Open `src/components/Header.astro`, find the `.nav-toggle,\n.nav-toggle-label { display: none; }` rule and the `@media (max-width: 1000px) { .nav-toggle-label { ... } ... }` block that follows it (currently lines 134-156).
2. Replace exactly that span — from `.nav-toggle-label { display: flex; ...}` through the closing brace of the `.nav-toggle-label::before`/`::after` shared rule (ending at the line before `.main-nav {` starts) — with the **Target** CSS above.
3. Do NOT touch the `.main-nav { ... }` rule or anything from that point onward in the same `@media (max-width: 1000px)` block — those govern the slide-down panel and are already correct (verified in a prior audit pass).
4. Leave the HTML markup (`<input type="checkbox" id="nav-toggle" ...>` and `<label ... class="nav-toggle-label" ...><span></span></label>`) completely unchanged — this is a CSS-only plan.

## Boundaries

- Do NOT change the checkbox/label HTML structure — the morph is achieved entirely by restyling the existing `::before`, `<span>`, `::after` trio.
- Do NOT touch `.main-nav` or any of its child selectors (`.main-nav > ul`, `.header-cta`, etc.) in this same media query block — out of scope, already correct.
- Do NOT change the `aria-label="Ouvrir le menu"` on the `<label>` — updating it to reflect open/closed state (e.g. toggling to "Fermer le menu") would be a reasonable follow-up but is a separate, non-motion concern outside this plan's scope; do not attempt it here.
- Do NOT add a new CSS custom property for this — reuse `var(--ease-out)` and either the literal `200ms` or `var(--duration-hover)` as described above.
- If the current `.nav-toggle-label` block doesn't match the "current" code shown in Problem (different widths/heights/selector names since commit `e291e34`), STOP and report rather than guessing at new offsets — the `10px`/`20px` bar positions in Target are derived specifically from the current `28px × 22px` label size with `2px`-tall bars; if those dimensions have changed, the offsets need to be recalculated, not copy-pasted blindly.

## Verification

- **Mechanical**: `npm run build` — expect success, no errors.
- **Feel check**:
  1. Resize the browser (or use DevTools device toolbar) to below 1000px width so the mobile hamburger appears.
  2. Click the hamburger — confirm the three bars smoothly morph into an X shape over ~200ms: top bar rotates 45° and slides down to meet the middle, bottom bar rotates -45° and slides up to meet the middle, middle bar fades out. The menu panel should continue to slide open beneath it exactly as before (unaffected by this change).
  3. Click again to close — confirm the X morphs back into three bars, in sync with the panel's existing faster close timing (0.15s) — the icon's own 200ms transition and the panel's 0.15s close won't be perfectly synchronized and that's fine; the important check is that the icon always ends up in the correct state (X when open, bars when closed) with no visual glitch mid-transition.
  4. Click rapidly several times in a row — confirm the icon never gets stuck in a half-morphed or visually broken state (CSS transitions retarget smoothly from wherever they currently are, so this should just work, but verify).
  5. In DevTools Animations panel, set playback to 10% on one open-click and confirm the two outer bars visibly rotate through their arc rather than snapping, and that the middle bar's fade is imperceptible-but-present (not a hard cut).
  6. Toggle `prefers-reduced-motion: reduce` (Rendering panel) and click the hamburger — confirm the icon still correctly ends up as an X (or back to bars) even though the rotation/fade happens near-instantly, consistent with plan 001's reduced-motion handling if applied, or the existing blanket `animation-duration`/`transition-duration` override if not.
- **Done when**: the icon visibly and smoothly reflects open/closed state on every click, with no dependency changes, no markup changes, and the existing menu-panel animation completely unaffected.
