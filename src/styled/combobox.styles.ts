import { css } from 'lit';

/*
  Text Field's input, with the listbox in a panel beside it like Select's.
  The listbox is a popover, so a closed one isn't displayed, and its entrance
  runs each time it opens.
*/
export default css`
  [part~='listbox'] {
    animation: drop 150ms ease-out;
    background-color: var(--paper);
    border: var(--border);
    box-shadow: var(--shadow);
    box-sizing: border-box;
    color: var(--ink);
    margin-block: 0.5rem;
    max-block-size: 18rem;
    min-inline-size: anchor-size(inline);
    overflow-y: auto;
    padding: 0.25rem 0;
  }

  @keyframes drop {
    from {
      opacity: 0;
      translate: 0 -0.375rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [part~='listbox'] {
      animation: none;
    }
  }
`;
