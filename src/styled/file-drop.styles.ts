import { css } from 'lit';

/*
  Text Field's label and description, with the file input as a drop zone
  rather than a field. The input is the zone, so a drop anywhere on it lands,
  and its picker button is styled as a Button.
*/
export default css`
  [part~='input'] {
    background-color: var(--paper);
    block-size: auto;
    border: 2px dashed var(--ink);
    cursor: pointer;
    padding: 1.5rem;
    transition:
      background-color 100ms,
      border-color 100ms;

    &::file-selector-button {
      background-color: var(--ink);
      border: 0;
      box-shadow: 3px 3px 0 var(--ember);
      color: var(--paper);
      cursor: pointer;
      font-family: var(--font-display);
      font-size: 0.9375rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      margin-inline-end: 1rem;
      padding: 0.5rem 1rem;
      text-transform: uppercase;
    }
  }

  :host(:state(drag-over)) [part~='input'] {
    background-color: var(--chalk);
    border-color: var(--ember);
    border-style: solid;
  }

  @media (prefers-reduced-motion: reduce) {
    [part~='input'] {
      transition: none;
    }
  }
`;
