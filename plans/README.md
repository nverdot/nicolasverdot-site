# Animation improvement plans

Produced by `improve-animations` (standard effort, direct audit — repo is
small enough not to need subagent fan-out). Site: Astro static site, plain
CSS motion throughout, no animation library. Audited at commit `e291e34`.

## Plans

| # | Title | Severity | Category | Status |
|---|---|---|---|---|
| [001](001-reduced-motion-keep-opacity-feedback.md) | Reduced-motion should drop movement, not all feedback | MEDIUM | Accessibility | DONE |
| [002](002-gate-nav-underline-hover.md) | Gate the nav underline hover behind `(hover: hover)` | MEDIUM | Accessibility | DONE |
| [003](003-unify-entrance-opacity-easing.md) | Match opacity easing to transform easing on entrances | LOW | Easing & duration / Cohesion | DONE |
| [004](004-contact-form-submit-feedback.md) | Give the contact form submit a visible feedback moment | Missed opportunity | Feedback | DONE |
| [005](005-hamburger-to-x-morph.md) | Morph the mobile hamburger icon into an X on open | Missed opportunity | State indication | DONE |

## Recommended execution order

1. **003** first — smallest, purely mechanical (3 one-line easing swaps), zero risk of conflicting with anything else, good warm-up.
2. **002** next — single-file, single-rule, no dependency on any other plan.
3. **001** — touches `global.css` in the same general area as 003 (both edit reduced-motion-adjacent and `[data-reveal]`-adjacent rules); doing 003 first means 001's target block doesn't need to account for 003's edit having already landed (003 only changes an easing keyword, not the rule shape, so order between 001 and 003 doesn't actually matter functionally — but doing 003 first avoids re-diffing the same file twice in close succession).
4. **005** — self-contained to `Header.astro`, no dependency on 001-003.
5. **004** last — the largest single change (script + CSS in `ContactForm.astro`), fully independent of the other four; ordering last is just to save the biggest diff for when the smaller ones are confirmed solid.

No plan depends on another having landed first — all five are independent
and can be executed in any order, or in parallel across separate branches,
without conflict (they touch four different files: `global.css` in 001 and
003; `Header.astro` in 002 and 005 — these two do touch the same file but
different rules, `.main-nav > ul > li > a:hover::after` for 002 vs
`.nav-toggle-label` for 005 — verify no merge conflict if executing both
before committing; `GroupChat.astro` and `ChatCarousel.astro` in 003;
`ContactForm.astro` in 004).

## Deferred, not planned

- **FAQ accordion smoothing** (`global.css:1086-1112`, used on `/`,
  `/seminaires-alpes-maritimes/`, `/intelligence-collective/`) — confirmed
  real (native `<details>` snaps open/closed with no transition), but needs
  a markup change (wrapping the answer in a grid-trick div) plus swapping
  native `<details>` toggle behavior for a JS-driven `data-open` state,
  since `<details>` can't reliably cross-browser-transition height yet.
  Out of this pass's scope — run `improve-animations plan "FAQ accordion
  smooth open/close"` separately if wanted.
- **Theme toggle icon crossfade** and **`.more-door:active` press state** —
  both confirmed real, genuine, cheap fixes (found in the prior
  `find-animation-opportunities` sweep) but not written up as full plans
  this pass to keep the batch at five. Either can be turned into a plan on
  request.

## Cleared — no plan needed

- `GroupChat.astro:243` reaction-badge `scale(0)` spring pop — deliberate,
  well-executed exception matching the iMessage/Slack reaction-pop
  convention; already reviewed and endorsed in this project's own history.
- `Header.astro`'s `.main-nav` open/close panel transition — already
  correct (GPU-only properties, asymmetric open/close timing).
- `Quiz.astro` progress bar — already uses `transform: scaleX()`, not
  `width`.
- The 4-item stagger cap in `global.css`'s `card-in` rules — theoretical
  ceiling only; no `.cards` grid on the site currently exceeds 4 items, so
  it never actually fires.
