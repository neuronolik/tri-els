import { css } from 'lit';

export default [
  css`
    /*
      Functional, not visual. A form is a block, and so is the host that stands
      in for one.
    */
    :host {
      display: block;
    }
  `,
];
