import { css } from 'lit';

export default css`
  :host {
    color: var(--ink);
    font-family: var(--font-body);
  }

  [part~='tablist'] {
    border-block-end: 4px solid var(--ink);
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
  }

  :host([orientation='vertical']) {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: auto 1fr;

    & [part~='tablist'] {
      align-content: start;
      border-block-end: 0;
      border-inline-end: 4px solid var(--ink);
      flex-direction: column;
    }
  }
`;
