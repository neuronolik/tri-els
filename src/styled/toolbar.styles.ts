import { css } from 'lit';

/*
  The controls are the consumer's own buttons, slotted in, so they're styled
  through "::slotted()". A toggle's "aria-pressed" is what shows it's on.
*/
export default css`
  [part~='toolbar'] {
    background-color: var(--paper);
    border: var(--border);
    box-shadow: var(--shadow);
    display: flex;
    gap: 0.25rem;
    inline-size: fit-content;
    padding: 0.375rem;
  }

  :host([orientation='vertical']) [part~='toolbar'] {
    flex-direction: column;
  }

  ::slotted(button) {
    background-color: transparent;
    border: 2px solid transparent;
    color: var(--ink);
    cursor: pointer;
    font-family: var(--font-display);
    font-size: 0.9375rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    padding: 0.375rem 0.75rem;
    text-transform: uppercase;
    transition:
      background-color 100ms,
      color 100ms;
  }

  ::slotted(button:hover) {
    background-color: var(--chalk);
  }

  ::slotted(button:focus-visible) {
    outline: 3px solid var(--ember);
    outline-offset: 2px;
  }

  /*
    As specific as the hover above, and after it, so a pressed control keeps
    its ink while it's hovered. Were the hover to win, its chalk would sit
    under the pressed control's paper text.
  */
  ::slotted(button[aria-pressed='true']) {
    background-color: var(--ink);
    color: var(--paper);
  }

  ::slotted(button:disabled) {
    background-color: transparent;
    color: var(--ash);
    cursor: not-allowed;
    text-decoration: line-through;
  }

  @media (prefers-reduced-motion: reduce) {
    ::slotted(button) {
      transition: none;
    }
  }
`;
