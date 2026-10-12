import { css } from 'lit';

export default css`
  :host {
    display: block;
    padding-block: 1.5rem;
  }

  :host(:focus-visible) {
    outline: 3px solid var(--ember);
    outline-offset: 2px;
  }
`;
