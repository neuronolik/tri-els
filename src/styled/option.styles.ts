import { css } from 'lit';

export default css`
  :host {
    align-items: center;
    border-inline-start: 4px solid transparent;
    cursor: pointer;
    display: flex;
    font-family: var(--font-body);
    gap: 0.75rem;
    justify-content: space-between;
    padding: 0.5rem 0.875rem 0.5rem 0.75rem;
    transition:
      background-color 100ms,
      border-color 100ms,
      color 100ms;
  }

  /*
    Before ":state(active)", which wins when both apply. Hovering doesn't make
    an Option active, as in the APG's select-only combobox, so the keyboard's
    place stays visible beside the pointer's.
  */
  :host(:hover) {
    background-color: var(--chalk);
  }

  :host(:state(active)) {
    background-color: var(--ink);
    border-inline-start-color: var(--ember);
    color: var(--paper);
  }

  :host(:state(selected)) {
    font-weight: 600;
  }

  /* The check: a corner of border, turned. */
  :host(:state(selected))::after {
    block-size: 0.625rem;
    border-block-end: 2px solid currentcolor;
    border-inline-end: 2px solid currentcolor;
    content: '';
    flex-shrink: 0;
    inline-size: 0.3125rem;
    rotate: 45deg;
    translate: 0 -0.125rem;
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
