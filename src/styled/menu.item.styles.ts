import { css } from 'lit';

export default css`
  :host {
    border-inline-start: 4px solid transparent;
    cursor: pointer;
    padding: 0.5rem 0.875rem 0.5rem 0.75rem;
    transition:
      background-color 100ms,
      border-color 100ms,
      color 100ms;
  }

  :host(:state(active)) {
    background-color: var(--ink);
    border-inline-start-color: var(--ember);
    color: var(--paper);
  }

  :host(:state(disabled)) {
    color: var(--ash);
    cursor: not-allowed;
    text-decoration: line-through;
  }

  :host(:state(disabled):state(active)) {
    background-color: var(--chalk);
    color: var(--ash);
  }

  @media (prefers-reduced-motion: reduce) {
    :host {
      transition: none;
    }
  }
`;
