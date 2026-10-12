import { css } from 'lit';

export default css`
  :host {
    border-block-start: 4px solid transparent;
    cursor: pointer;
    font-family: var(--font-display);
    font-size: 1.0625rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    padding: 0.5rem 1.125rem;
    text-transform: uppercase;
    transition:
      background-color 100ms,
      color 100ms;
  }

  :host(:hover) {
    background-color: var(--chalk);
  }

  :host(:focus-visible) {
    outline: 3px solid var(--ember);
    outline-offset: -3px;
  }

  /*
    The ring is inside the Tab, so on a selected one it's on ink, where ember
    falls short of 3:1 in the dark. The text's color always has the contrast.
  */
  :host(:state(selected):focus-visible) {
    outline-color: currentcolor;
  }

  :host(:state(selected)) {
    background-color: var(--ink);
    border-block-start-color: var(--ember);
    color: var(--paper);
  }

  :host(:state(disabled)) {
    background-color: transparent;
    color: var(--ash);
    cursor: not-allowed;
    text-decoration: line-through;
  }

  @media (prefers-reduced-motion: reduce) {
    :host {
      transition: none;
    }
  }
`;
