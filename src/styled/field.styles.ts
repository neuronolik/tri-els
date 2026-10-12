import { css } from 'lit';

/*
  Field labels a control of the consumer's own, slotted in, so the control is
  styled through "::slotted()": Text Field's look, for an input or a select.
*/
export default css`
  :host {
    color: var(--ink);
    display: grid;
    font-family: var(--font-body);
  }

  [part~='label'] {
    font-family: var(--font-display);
    font-size: 1.0625rem;
    font-weight: 600;
    margin-block-end: 0.375rem;
  }

  :host(:state(required)) [part~='label']::after {
    color: var(--ember-deep);
    content: ' *' / '';
  }

  [part~='control'] {
    display: grid;
  }

  ::slotted([slot='control']) {
    background-color: var(--paper);
    block-size: 3rem;
    border: var(--border);
    border-radius: 0;
    box-sizing: border-box;
    color: inherit;
    font: inherit;
    padding: 0 0.75rem;
    transition:
      border-color 100ms,
      box-shadow 100ms;
  }

  /* The outline is transparent rather than gone, for forced colors. */
  ::slotted([slot='control']:focus-visible) {
    box-shadow: 4px 4px 0 var(--ember);
    outline: 2px solid transparent;
  }

  :host(:state(error)) ::slotted([slot='control']) {
    border-color: var(--ember-deep);
  }

  :host(:state(disabled)) ::slotted([slot='control']) {
    background-color: var(--chalk);
    border-style: dashed;
    color: var(--ash);
    cursor: not-allowed;
  }

  [part~='description'] {
    color: var(--ash);
    font-size: 0.875rem;
  }

  ::slotted([slot='description']) {
    margin-block-start: 0.375rem;
  }

  :host(:state(error)) [part~='description'] {
    color: var(--ember-deep);
    font-weight: 600;
  }

  @media (prefers-reduced-motion: reduce) {
    ::slotted([slot='control']) {
      transition: none;
    }
  }
`;
