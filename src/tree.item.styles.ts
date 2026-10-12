import { css } from 'lit';

export default [
  css`
    /*
      Functional, not visual. A Tree Item is a row of its Tree, with its
      children below it, so it's a block: a Tree scrolls the active one into
      view, and an inline box with nothing in it has nothing to scroll to or
      click.
    */
    :host {
      display: block;
    }

    /*
      A collapsed Tree Item's children are hidden. Important, because a
      design's own \`display\` on "::part(group)" would otherwise win over a
      shadow root's styles and show them. An important declaration in a shadow
      root wins over one from outside it.
    */
    :host(:not([expanded])) [part~='group'] {
      display: none !important;
    }
  `,
];
