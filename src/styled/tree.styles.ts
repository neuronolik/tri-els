import { css } from 'lit';

/*
  Focus stays on the tree and the active Tree Item shows where the keyboard
  is, so the tree's own focus is the shadow, as Listbox's is.
*/
export default css`
  [part~='tree'] {
    background-color: var(--paper);
    border: var(--border);
    color: var(--ink);
    font-family: var(--font-body);
    padding: 0.25rem 0;
    transition: box-shadow 100ms;

    &:focus-visible {
      box-shadow: 4px 4px 0 var(--ember);
      outline: 2px solid transparent;
    }

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }
`;
