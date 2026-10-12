import { css } from 'lit';

export default [
  css`
    /*
      Functional, not visual. A custom element is inline by default, and a
      calendar holds a header and a table.
    */
    :host {
      display: block;
    }
  `,
];
