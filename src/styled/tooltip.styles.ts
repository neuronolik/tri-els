import { css } from 'lit';

export default css`
  /* A closed tooltip isn't displayed, so this runs each time it opens. */
  [part~='tooltip'] {
    animation: fade 120ms ease-out;
    background-color: var(--ink);
    border: 0;
    box-shadow: 3px 3px 0 var(--ember);
    color: var(--paper);
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    line-height: 1.4;
    margin: 0.625rem;
    max-inline-size: 18rem;
    padding: 0.5rem 0.75rem;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [part~='tooltip'] {
      animation: none;
    }
  }
`;
