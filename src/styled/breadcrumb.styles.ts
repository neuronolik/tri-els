import { css } from 'lit';

/*
  The links are the consumer's own, slotted in, so they're styled through
  "::slotted()". Breadcrumb marks the last one with "aria-current".
*/
export default css`
  [part~='list'] {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    font-family: var(--font-display);
    font-size: 1.0625rem;
    gap: 0.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  [part~='item'] {
    align-items: center;
    display: flex;
    gap: 0.5rem;
  }

  [part~='separator']::before {
    color: var(--ember);
    content: '/';
    font-weight: 700;
  }

  ::slotted(a) {
    color: var(--ink);
    text-decoration-color: var(--ember);
    text-decoration-line: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.25em;
  }

  ::slotted(a:hover) {
    background-color: var(--ink);
    color: var(--paper);
    text-decoration-line: none;
  }

  ::slotted(a:focus-visible) {
    outline: 3px solid var(--ember);
    outline-offset: 2px;
  }

  ::slotted([aria-current='page']) {
    font-weight: 700;
    text-decoration-line: none;
  }
`;
