# 004 — Give the contact form submit a visible feedback moment

- **Status**: DONE
- **Commit**: e291e34
- **Severity**: Missed opportunity (additive)
- **Category**: Missed opportunities / Feedback
- **Estimated scope**: 1 file (`src/components/ContactForm.astro`), CSS + ~6 lines of script

## Problem

This is the literal conversion moment on the entire site — the one form
that turns a visitor into a lead — and it currently gives the user almost
no visual confirmation that anything happened.

```astro
<!-- src/components/ContactForm.astro:30-31 — current -->
<button type="submit" class="btn full">Envoyer</button>
<p id="form-status" class="fine full" role="status" aria-live="polite"></p>
```

```css
/* src/components/ContactForm.astro:61-68 — current */
#form-status {
  min-height: 1.2em;
}
#form-status[data-state='success'] {
  color: #4b5a3f;
}
#form-status[data-state='error'] {
  color: var(--color-green);
}
```

```js
// src/components/ContactForm.astro:76-106 — current
form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!status) return;

  const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
  if (submitButton) submitButton.disabled = true;
  status.dataset.state = '';
  status.textContent = 'Envoi en cours…';

  try {
    const formData = new FormData(form);
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    });
    const result = await response.json();

    if (result.success) {
      status.dataset.state = 'success';
      status.textContent = 'Merci, votre message a bien été envoyé ! Je vous répondrai rapidement.';
      form.reset();
    } else {
      throw new Error(result.message || 'Erreur inconnue');
    }
  } catch (error) {
    status.dataset.state = 'error';
    status.textContent = "Une erreur est survenue lors de l'envoi. Merci de réessayer ou de m'écrire directement par email.";
  } finally {
    if (submitButton) submitButton.disabled = false;
  }
});
```

Today: the button gets `disabled = true` (a native, barely-visible dimming
that varies by browser) and `status.textContent` is overwritten three times
in a row ("Envoi en cours…" → success or error text) with zero transition.
The text just replaces itself instantly. For a form whose entire job is to
convert a hesitant visitor into a booked call, this is the flattest,
least-reassuring interaction on the whole site.

## Target

1. **Button press feedback + label swap.** On submit, add a class that
   scales the button down (reusing the exact press-feedback pattern already
   used site-wide for `.btn:active`) and swap its text to "Envoi…" so the
   click has instant, unambiguous confirmation.
2. **Status message fades and rises in** instead of snapping, every time its
   text changes (Envoi en cours… / success / error are each a fresh
   entrance, not a continuous edit).

```css
/* target — add to the <style> block in ContactForm.astro, near #form-status */
#form-status {
  min-height: 1.2em;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 250ms var(--ease-out), transform 250ms var(--ease-out);
}
#form-status.is-visible {
  opacity: 1;
  transform: translateY(0);
}
#form-status[data-state='success'] {
  color: #4b5a3f;
}
#form-status[data-state='error'] {
  color: var(--color-green);
}
```

```js
// target — src/components/ContactForm.astro script, replacing the current handler body
form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!status) return;

  const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement | null;
  const originalLabel = submitButton?.textContent ?? 'Envoyer';

  function setStatus(text: string, state: '' | 'success' | 'error') {
    if (!status) return;
    status.classList.remove('is-visible');
    // Force a reflow so the class removal/re-add actually retriggers the
    // transition even if the text is changing while still visible (e.g.
    // "Envoi en cours…" being replaced by the success message).
    void status.offsetWidth;
    status.dataset.state = state;
    status.textContent = text;
    status.classList.add('is-visible');
  }

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = 'Envoi…';
  }
  setStatus('Envoi en cours…', '');

  try {
    const formData = new FormData(form);
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    });
    const result = await response.json();

    if (result.success) {
      setStatus('Merci, votre message a bien été envoyé ! Je vous répondrai rapidement.', 'success');
      form.reset();
    } else {
      throw new Error(result.message || 'Erreur inconnue');
    }
  } catch (error) {
    setStatus("Une erreur est survenue lors de l'envoi. Merci de réessayer ou de m'écrire directement par email.", 'error');
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = originalLabel;
    }
  }
});
```

## Repo conventions to follow

- Duration and easing: `250ms var(--ease-out)` — within this repo's
  documented budget for feedback moments (100-300ms for UI), and matches
  the "entering → ease-out" rule since the status message is entering.
- `var(--ease-out)` is defined in `src/styles/tokens.css` — do not hardcode
  the cubic-bezier.
- The `.btn:active { transform: scale(0.97) }` press pattern already exists
  in `src/styles/global.css` (search `.btn:active`) and applies
  automatically to this form's submit button since it uses `class="btn
  full"` — **no new CSS is needed for the press feedback itself**, it
  already fires on click. This plan's job is only the label swap and the
  status message transition.
- Exemplar for the "entrance via class toggle" pattern: `src/pages/blog/index.astro`'s `.blog-empty[hidden]` pattern is the closest sibling (a status-ish message that appears/disappears), though that one uses the `hidden` attribute rather than opacity — this plan intentionally uses opacity+transform instead of `hidden`/`display`, since the message needs to visibly re-announce itself even when going from one visible state (Envoi en cours…) directly to another (success/error), which a `hidden` toggle can't express.

## Steps

1. Open `src/components/ContactForm.astro`.
2. In the `<style>` block, find `#form-status { min-height: 1.2em; }` (currently line 61-63) and replace it with the **Target** CSS block above (adds `opacity`, `transform`, `transition`, and the new `.is-visible` rule; keeps the existing `[data-state='success']` and `[data-state='error']` color rules unchanged, just relocate them after the new rule as shown).
3. In the `<script>` block, replace the entire `form?.addEventListener('submit', ...)` handler with the **Target** script above. It preserves all existing behavior (disable button during submit, same three status messages, same web3forms fetch call, `form.reset()` on success) and adds: the button label swap to "Envoi…" and back, and the `setStatus()` helper that retriggers the fade/rise transition on every status change via a forced reflow (`void status.offsetWidth`) between removing and re-adding `.is-visible`.
4. Do not change the `access_key`, `subject`, `botcheck` hidden fields, or any of the visible `<input>`/`<textarea>` fields above the button — only the button/status markup, the new CSS rule, and the submit handler are in scope.

## Boundaries

- Do NOT change the web3forms endpoint, request method, headers, or payload — only presentation/feedback around the existing request.
- Do NOT add a spinner icon, a new dependency, or any animation library — this is a CSS transition + a few lines of vanilla script, consistent with the rest of this codebase (no motion library is used anywhere in this repo).
- Do NOT change `role="status"` / `aria-live="polite"` on `#form-status` — that's existing, correct accessibility behavior for screen readers and must be preserved exactly.
- Do NOT touch `src/pages/contact.astro` (the page that renders this component) — this plan is scoped entirely to `ContactForm.astro`.
- If the current submit handler's structure (the try/catch/finally shape, the `result.success` check) has changed since commit `e291e34`, STOP and report rather than forcing the new handler on top of different logic.

## Verification

- **Mechanical**: `npm run build` — expect success, no errors. This component ships client-side script (`<script>` in an `.astro` file) — confirm no TypeScript errors surface in the build output for this file.
- **Feel check**:
  1. Start the dev server, go to `/contact/`, fill the required fields (name, email, message) with test data.
  2. Click "Envoyer" — confirm the button visibly presses down (`scale(0.97)`) on click, its label changes to "Envoi…", and "Envoi en cours…" fades and rises into view below the button within ~250ms (not an instant snap).
  3. Wait for the request to resolve — confirm the status text changes to the success message with the same fade/rise (not an abrupt text replacement), the button label reverts to "Envoyer", and the button re-enables.
  4. To test the error path: temporarily break the fetch URL in DevTools (or throttle network to "Offline" before submitting) — confirm the error message also fades/rises in the same way, styled in the existing error color.
  5. In DevTools Animations panel, set playback to 10% during a submit and confirm the status message's opacity and translateY move together, finishing at the same time.
  6. Toggle `prefers-reduced-motion: reduce` (Rendering panel) and resubmit — confirm the status message still becomes visible (not stuck at opacity 0) but without the rise/fade animation, per plan 001's reduced-motion handling if that plan has already been applied; if plan 001 has not yet been applied, note that this new `#form-status` transition will currently be caught by the existing blanket reduced-motion rule and instantly show the end state, which is acceptable either way.
- **Done when**: every status message (Envoi en cours…, success, error) visibly fades and rises into view rather than snapping, the submit button gives immediate press feedback and a label change, and the existing web3forms submission logic (including error handling and form reset on success) behaves identically to before this change.
