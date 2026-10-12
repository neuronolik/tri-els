import { css } from 'lit';

export default [
  css`
    /*
      Functional, not visual. A custom element is inline by default, and its
      Disclosures are blocks. Left inline, the host would wrap block boxes and
      misreport its own size to anything measuring it.
    */
    :host {
      display: block;
    }
  `,
];
