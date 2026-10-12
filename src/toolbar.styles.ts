import { css } from 'lit';

export default [
  css`
    /*
      Functional, not visual. A custom element is inline by default, and the
      toolbar holds a row of controls.
    */
    :host {
      display: block;
    }
  `,
];
