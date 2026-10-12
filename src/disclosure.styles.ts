import { css } from 'lit';

export default [
  css`
    /*
      Functional, not visual. A custom element is inline by default, and a
      \`<details>\` is a block. Left inline, the host would wrap a block box
      and misreport its own size to anything measuring it.
    */
    :host {
      display: block;
    }
  `,
];
