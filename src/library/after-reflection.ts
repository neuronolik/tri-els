/**
 * For `formDisabledCallback()`, so the change it makes isn't dropped.
 *
 * The browser calls `formDisabledCallback()` as soon as the `disabled` attribute
 * changes. When that's Lit reflecting `disabled`, it's inside `update()`, after
 * `render()` and just before Lit marks the update done by replacing its changed
 * properties and clearing `isUpdatePending`. A property set then is stored, but
 * it neither schedules an update, because one is still pending, nor survives in
 * the update's changed properties. So nothing re-renders, and the element is
 * left rendered with whatever was set before, such as still disabled after
 * `disabled` is turned off.
 *
 * A microtask later, the update is done and a property set starts a new one.
 */
export default function afterReflection(callback: () => void) {
  queueMicrotask(callback);
}
