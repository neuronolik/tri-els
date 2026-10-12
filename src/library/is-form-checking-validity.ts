// A form's `checkValidity()`, `reportValidity()` and submission all fire the
// same cancelable "invalid" event at each invalid control, at the same point,
// so nothing about the event says whether the form is only checking.
// `checkValidity()` is the one that shows nothing, and it's the only one that
// always goes through a method a script can see (submission can come from a
// button or the Enter key), so Form wraps its own `<form>`'s to mark when it's
// running, and a control asks its form owner.
//
// Only that `<form>` instance is wrapped, never `HTMLFormElement.prototype`, so
// importing a component leaves every other form on the page alone. The count is
// kept on the `<form>` under a registered symbol, rather than in this module,
// so more than one copy of this module on a page agrees on it.

const key = Symbol.for('slab.isCheckingValidity');

type MarkedForm = HTMLFormElement & { [key]?: number };

export function markFormCheckingValidity(form: HTMLFormElement) {
  const { checkValidity } = form;
  const marked = form as MarkedForm;

  marked.checkValidity = () => {
    marked[key] = (marked[key] ?? 0) + 1;

    try {
      return checkValidity.call(marked);
    } finally {
      marked[key] -= 1;
    }
  };

  return form;
}

export default function isFormCheckingValidity(
  form: MarkedForm | null,
): boolean {
  return (form?.[key] ?? 0) > 0;
}
