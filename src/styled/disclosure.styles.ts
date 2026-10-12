import { css } from 'lit';

export default css`
  :host {
    border-block-end: var(--border);
    color: var(--ink);
    font-family: var(--font-body);
  }

  [part~='summary'] {
    align-items: center;
    cursor: pointer;
    display: flex;
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 600;
    gap: 1rem;
    justify-content: space-between;
    list-style: none;
    padding: 1rem 0.25rem;

    &::-webkit-details-marker {
      display: none;
    }

    /*
      The marker. Its text is decorative, so it's given empty alternative
      text: the summary's expanded state already says it's open.
    */
    &::after {
      align-items: center;
      background-color: var(--ink);
      block-size: 1.75rem;
      color: var(--paper);
      content: '+' / '';
      display: flex;
      flex-shrink: 0;
      font-family: var(--font-mono);
      font-size: 1.25rem;
      font-weight: 400;
      inline-size: 1.75rem;
      justify-content: center;
      transition: background-color 150ms;
    }

    &:hover::after {
      background-color: var(--ember);
    }

    &:focus-visible {
      outline: 3px solid var(--ember);
      outline-offset: 2px;
    }
  }

  :host([open]) [part~='summary']::after {
    background-color: var(--ember);
    content: '−' / '';
  }

  /*
    A closed "<details>" hides its content with "content-visibility". The
    transition on it is discrete, so the content stays visible until the
    height has finished closing over it.
  */
  [part~='details']::details-content {
    block-size: 0;
    overflow: clip;
    transition:
      block-size 250ms ease-out,
      content-visibility 250ms allow-discrete;
  }

  /*
    "calc-size()" is "auto" that a transition can reach. Where it isn't
    supported, the declaration is dropped for plain "auto", and Disclosure
    opens and closes at once, as it would with no styles.
  */
  :host([open]) [part~='details']::details-content {
    block-size: auto;
    block-size: calc-size(auto, size);
  }

  [part~='content'] {
    line-height: 1.6;
    padding: 0 0.25rem 1.25rem;
  }

  @media (prefers-reduced-motion: reduce) {
    [part~='summary']::after,
    [part~='details']::details-content {
      transition: none;
    }
  }
`;
