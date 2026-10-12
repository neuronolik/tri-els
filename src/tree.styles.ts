import { css } from 'lit';

export default [
  css`
    /*
      Functional, not visual. A custom element is inline by default, and the
      tree holds rows of Tree Items.
    */
    :host {
      display: block;
    }
  `,
];
