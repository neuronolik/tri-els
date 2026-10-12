import { css } from 'lit';

export default [
  css`
    /*
      Functional, not visual. A custom element is inline by default, and its
      tab list and Panels are blocks.
    */
    :host {
      display: block;
    }
  `,
];
