import { css } from 'lit';

export default css`
  /*
    A closed dialog isn't displayed, so the animation runs again each time it
    opens.
  */
  [part~='dialog'] {
    animation: rise 200ms ease-out;
    background-color: var(--paper);
    border: 3px solid var(--ink);
    box-shadow: 10px 10px 0 var(--ember);
    box-sizing: border-box;
    color: var(--ink);
    font-family: var(--font-body);
    inline-size: min(32rem, 100% - 2rem);
    line-height: 1.5;
    padding: 0 1.5rem 1.5rem;

    &::backdrop {
      animation: fade 200ms ease-out;

      /*
        Not a token. A backdrop doesn't inherit custom properties from the
        dialog in every browser, but it does take its color scheme.
      */
      background-color: light-dark(rgb(28 28 28 / 70%), rgb(0 0 0 / 75%));
    }
  }

  /*
    The header. It's pulled out to the dialog's edges, which its padding would
    otherwise keep it from.
  */
  [part~='label'] {
    /*
      Ink in the light. In the dark, ink is the light color, so the header is
      the raised surface instead, rather than a bright bar.
    */
    background-color: light-dark(var(--ink), var(--chalk));
    border-block-end: 6px solid var(--ember);
    color: light-dark(var(--paper), var(--ink));
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 600;
    margin-block-end: 1.25rem;
    margin-inline: -1.5rem;
    padding: 1rem 1.5rem;
  }

  @keyframes rise {
    from {
      opacity: 0;
      translate: 0 1rem;
    }
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [part~='dialog'],
    [part~='dialog']::backdrop {
      animation: none;
    }
  }
`;
