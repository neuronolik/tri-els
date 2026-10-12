import { css } from 'lit';

export default [
  css`
    /*
      Functional, not visual. An Option is a row of its Listbox, the way an
      item is a row of a list, so it's a block: a Listbox scrolls the active
      one into view, and an inline box with nothing in it has nothing to
      scroll to or click.
    */
    :host {
      display: block;
    }

    /*
      Functional, not visual. Combobox hides the Options it filters out with
      \`hidden\`, and a \`display\` given to an Option would otherwise win over
      it: a subclass's, or a consumer's, since a page's styles beat \`:host\`
      ones and Combobox's \`::slotted()\` ones alike. Important, so neither can
      show an Option that doesn't match.
    */
    :host([hidden]) {
      display: none !important;
    }
  `,
];
