import { css } from 'lit';

/*
  At the first and last pages, Previous and Next are "aria-disabled" rather
  than disabled, so they keep focus. They're styled from Pagination's
  ":state(first)" and ":state(last)".
*/
export default css`
  [part~='list'] {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  [part~='page'],
  [part~='previous'],
  [part~='next'] {
    background-color: var(--paper);
    block-size: 2.5rem;
    border: var(--border);
    box-shadow: 3px 3px 0 var(--ink);
    color: var(--ink);
    cursor: pointer;
    font-family: var(--font-display);
    font-size: 1rem;
    font-weight: 600;
    min-inline-size: 2.5rem;
    padding: 0 0.75rem;
    transition:
      background-color 100ms,
      box-shadow 100ms;

    &:hover {
      background-color: var(--chalk);
    }

    &:active {
      box-shadow: 1px 1px 0 var(--ink);
    }

    &:focus-visible {
      outline: 3px solid var(--ember);
      outline-offset: 3px;
    }
  }

  [part~='current'] {
    background-color: var(--ink);
    box-shadow: 3px 3px 0 var(--ember);
    color: var(--paper);

    &:hover {
      background-color: var(--ink);
    }
  }

  [part~='ellipsis'] {
    color: var(--ash);
    font-family: var(--font-mono);
    padding-inline: 0.25rem;
  }

  :host(:state(first)) [part~='previous'],
  :host(:state(last)) [part~='next'] {
    background-color: var(--chalk);
    border-style: dashed;
    box-shadow: none;
    color: var(--ash);
    cursor: not-allowed;
  }

  @media (prefers-reduced-motion: reduce) {
    [part~='page'],
    [part~='previous'],
    [part~='next'] {
      transition: none;
    }
  }
`;
