import { css } from 'lit';

export default css`
  :host {
    align-items: stretch;
    background-color: var(--ink);
    border-inline-start: 8px solid var(--ember);
    color: var(--paper);
    display: flex;
    font-family: var(--font-body);
    line-height: 1.5;
  }

  :host(:empty) {
    background-color: transparent;
    border: 0;
  }

  [part~='alert'] {
    flex-grow: 1;
    padding: 0.875rem 1rem;
  }

  :host(:empty) [part~='alert'] {
    padding: 0;
  }

  /* With no message there's nothing to dismiss. */
  :host(:empty) [part~='dismiss-button'] {
    display: none;
  }

  [part~='dismiss-button'] {
    background-color: transparent;
    border: 0;
    border-inline-start: 2px solid currentcolor;
    color: inherit;
    cursor: pointer;
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    letter-spacing: 0.06em;
    padding: 0 1rem;
    text-transform: uppercase;
    transition:
      background-color 100ms,
      color 100ms;

    &:hover {
      background-color: var(--paper);
      color: var(--ink);
    }

    /*
      Inside the button, so on the alert's own color, where ember falls short
      of 3:1 in the dark. The text's color always has the contrast.
    */
    &:focus-visible {
      outline: 3px solid currentcolor;
      outline-offset: -3px;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }
`;
