import { css } from 'lit';

export default [
  css`
    /*
      Functional, not visual. A Menu Item is a row of its Menu, so it's a
      block: a Menu scrolls the active one into view, and an inline box with
      nothing in it has nothing to scroll to or click.
    */
    :host {
      display: block;
    }
  `,
];
