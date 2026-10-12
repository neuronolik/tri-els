import { css } from 'lit';

export default [
  css`
    /*
      Functional, not visual. \`hidden\` is how Tabs hides a Panel, and a
      \`display\` given to the host would otherwise win over it: a subclass's
      or, since a page's styles beat \`:host\` ones, a consumer's. Important, as
      Alert's is, so neither can show a Panel that isn't selected.
    */
    :host([hidden]) {
      display: none !important;
    }
  `,
];
