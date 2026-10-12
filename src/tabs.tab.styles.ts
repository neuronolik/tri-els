import { css } from 'lit';

export default [
  css`
    /*
      Functional, not visual. A Tab is focusable so Tabs can move focus between
      them, and Tabs takes the outline from here.
    */
    :host {
      outline: none;
    }
  `,
];
