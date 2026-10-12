// `assert-slot` and `required` report by throwing: sometimes out of a promise
// `then()`, which surfaces as an unhandled rejection, and sometimes out of a
// "slotchange" handler, which surfaces as a window error. Tests care about
// which messages were reported rather than about which of the two paths
// carried them, so both are collected into one list.
//
// In its own module because Playwright tests run in Node.js while this has to
// run in the browser. Tests import it by path inside `page.evaluate()`.

export default async function collectErrors(
  callback: () => unknown,
): Promise<string[]> {
  const messages: string[] = [];

  const onRejection = (event: PromiseRejectionEvent) => {
    event.preventDefault();

    messages.push(
      event.reason instanceof Error
        ? event.reason.message
        : String(event.reason),
    );
  };

  const onError = (event: ErrorEvent) => {
    event.preventDefault();

    messages.push(
      event.error instanceof Error ? event.error.message : event.message,
    );
  };

  window.addEventListener('unhandledrejection', onRejection);
  window.addEventListener('error', onError);

  try {
    await callback();

    // Long enough for a microtask-deep `updateComplete` chain to settle and for
    // "slotchange" to have fired.
    await new Promise((resolve) => setTimeout(resolve, 50));
  } finally {
    window.removeEventListener('unhandledrejection', onRejection);
    window.removeEventListener('error', onError);
  }

  return messages;
}
