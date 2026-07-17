# 002 — Gate the nav underline hover behind (hover: hover)

- **Status**: DONE
- **Commit**: e291e34
- **Severity**: MEDIUM
- **Category**: Accessibility
- **Estimated scope**: 1 file (`src/components/Header.astro`), 1 rule wrapped

## Problem

`src/components/Header.astro:105-121` (the primary desktop nav link styles):

```css
/* src/components/Header.astro:105 — current */
.main-nav > ul > li > a {
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: var(--color-ink);
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  padding: 0.5em 1em;
  transition: color var(--duration-hover) var(--ease-out);
}
.main-nav > ul > li > a::after {
  content: '';
  position: absolute;
  left: 1em;
  right: 1em;
  bottom: 0.25em;
  height: 2px;
  background: var(--color-orange);
  transform: scaleX(0);
  transition: transform var(--duration-hover) var(--ease-out);
}
.main-nav > ul > li > a:hover {
  color: var(--color-blue);
}
.main-nav > ul > li > a:hover::after {
  transform: scaleX(1);
}
```

`.main-nav > ul > li > a:hover::after { transform: scaleX(1); }` animates a
`transform` on `:hover` with no `@media (hover: hover) and (pointer: fine)`
guard. On touch devices, tapping a nav link fires a synthetic `:hover`
state that can stick until the user taps elsewhere, so the underline can
appear "stuck" scaled-in on a link the user already navigated away from (or
flicker oddly on the return-to-page transition). This is the exact pattern
the project's own accessibility rule calls out: `@media (hover: hover) and
(pointer: fine)` gating for any hover rule that moves a `transform`. Every
other transform-on-hover rule in this codebase is already gated this way —
`.btn:hover` (`global.css:117`), `.card:hover` (`global.css:441`),
`.panel:hover` (`global.css:203`), `.filter-btn:hover` (`global.css:967`),
`.theme-toggle:hover` (`global.css:320`), `.card-link:hover::after`
(`global.css:473`), `.more-door:hover` (`src/pages/index.astro:395`) — this
nav underline is the one holdout, and it's on the primary site navigation,
present on every single page.

## Target

```css
/* target — src/components/Header.astro */
.main-nav > ul > li > a:hover {
  color: var(--color-blue);
}

@media (hover: hover) and (pointer: fine) {
  .main-nav > ul > li > a:hover::after {
    transform: scaleX(1);
  }
}
```

The `color` change on `:hover` (line `.main-nav > ul > li > a:hover { color:
var(--color-blue); }`) is a color transition, not a `transform` — leave it
ungated, consistent with how this repo treats color-only hovers elsewhere
(e.g. `.footer-col a:hover`, `.authority a:hover` are also ungated, and
correctly so — color changes don't produce the sticky-hover visual bug that
transform/movement does).

## Repo conventions to follow

- The exact gating pattern to copy verbatim is `src/styles/global.css:439-444`:
  ```css
  @media (hover: hover) and (pointer: fine) {
    .card:hover {
      transform: translateY(-4px);
    }
  }
  ```
- Keep the `:hover` (color) and `:hover::after` (transform) rules as two
  separate rules, as they are today — only the second one needs wrapping.

## Steps

1. Open `src/components/Header.astro`, find `.main-nav > ul > li > a:hover::after` (currently around line 120-122, inside the `<style>` block).
2. Wrap only that rule in `@media (hover: hover) and (pointer: fine) { ... }`, as shown in **Target**.
3. Leave `.main-nav > ul > li > a:hover { color: var(--color-blue); }` exactly where it is, ungated.
4. Leave `.main-nav > ul > li > a[aria-current='page']::after { transform: scaleX(1); }` (the "current page" state, a few lines below) untouched — that's not a `:hover` rule, it's a persistent state indicator for the active page and should stay unconditional.

## Boundaries

- Do NOT touch the `[aria-current='page']` rules — they are a different mechanism (active-page indicator, not hover feedback) and are out of scope.
- Do NOT change the mobile nav (`.nav-toggle:checked ~ .main-nav` and its children) — mobile menu items don't have this hover rule active in the same way once the responsive breakpoint collapses the layout; verify with the feel check but do not preemptively modify mobile-specific CSS.
- Do NOT add gating to `.main-nav > ul > li > a:hover` (the color-only rule) — only the `::after` transform rule is in scope.
- If the selector or line numbers have drifted since commit `e291e34`, STOP and report instead of guessing.

## Verification

- **Mechanical**: `npm run build` — expect success, no errors.
- **Feel check**:
  1. On desktop (mouse), hover each top-nav link one at a time — confirm the underline still grows in smoothly (`scaleX(0)` → `scaleX(1)`) exactly as before, at the same `var(--duration-hover)` speed.
  2. In Chrome DevTools, toggle device emulation to a touch device (e.g. iPhone), reload, and tap a nav link — confirm there's no lingering underline artifact on the link you tapped once the page navigates or once you tap elsewhere.
  3. In DevTools Elements panel, force `:hover` state on a nav `<a>` (right-click the element → Force state → `:hover`) with viewport still in touch/mobile emulation mode — confirm the browser still applies the color change but skip this specific check if `(hover: hover)` emulation isn't controllable this way; the primary check is step 2 on a real touch-emulated tap.
  4. Confirm no visual regression on desktop: underline behavior should be indistinguishable from before this change when using a mouse.
- **Done when**: mouse users see the identical underline hover behavior as before; touch users no longer get a transform-based hover artifact that can stick after a tap.
