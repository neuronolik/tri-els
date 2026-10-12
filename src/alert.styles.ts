import { css } from 'lit';

export default [
  css`
    /*
      Functional, not visual. Dismissing an alert sets \`hidden\`, and a
      consumer's \`display\` on the host would otherwise win over the browser's
      own \`[hidden]\` rule and leave the alert showing. A consumer's styles
      beat \`:host\` ones too, unless the \`:host\` one is important.
    */
    :host([hidden]) {
      display: none !important;
    }
  `,
];
