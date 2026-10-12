import { css } from 'lit';

export default css`
  [part~='label'] {
    align-items: center;
    border-inline-start: 4px solid transparent;
    cursor: pointer;
    display: flex;
    gap: 0.5rem;
    padding: 0.375rem 0.75rem;
    transition:
      background-color 100ms,
      color 100ms;

    /*
      The chevron, a corner of border, turned to point at the children. A Tree
      Item with none keeps the room, so labels line up.
    */
    &::before {
      block-size: 0.4375rem;
      content: '';
      flex-shrink: 0;
      inline-size: 0.4375rem;
      rotate: -45deg;
      transition: rotate 150ms;
    }

    &:hover {
      background-color: var(--chalk);
    }
  }

  :host(:state(parent)) [part~='label']::before {
    border-block-end: 2px solid currentcolor;
    border-inline-end: 2px solid currentcolor;
  }

  :host(:state(expanded)) [part~='label']::before {
    rotate: 45deg;
  }

  :host(:state(selected)) [part~='label'] {
    border-inline-start-color: var(--ember);
    font-weight: 600;
  }

  /* After ":hover", which ":state(active)" wins over. */
  :host(:state(active)) [part~='label'] {
    background-color: var(--ink);
    color: var(--paper);
  }

  :host(:state(disabled)) [part~='label'] {
    color: var(--ash);
    cursor: not-allowed;
    text-decoration: line-through;
  }

  [part~='group'] {
    border-inline-start: 2px solid var(--chalk);
    margin-inline-start: 1.125rem;
  }

  @media (prefers-reduced-motion: reduce) {
    [part~='label'],
    [part~='label']::before {
      transition: none;
    }
  }
`;
