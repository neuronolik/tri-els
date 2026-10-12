import { css } from 'lit';

/*
  Only while it's open. A dismissed toast's region is hidden visually, and
  padding or a border here would give it size again.
*/
export default css`
  :host(:state(open)) [part~='region'] {
    animation: rise 200ms ease-out;
    background-color: var(--ink);
    border: 0;
    border-inline-start: 8px solid var(--ember);
    box-shadow: 4px 4px 0 var(--ember);
    color: var(--paper);
    font-family: var(--font-body);
    inset: auto 1.5rem 1.5rem auto;
    margin: 0;
    max-inline-size: min(24rem, 100% - 3rem);
    padding: 0.875rem 1.25rem;
    position: fixed;
  }

  @keyframes rise {
    from {
      opacity: 0;
      translate: 0 1rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    :host(:state(open)) [part~='region'] {
      animation: none;
    }
  }
`;
