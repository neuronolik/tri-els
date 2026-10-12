import { css } from 'lit';

export default [
  css`
    /*
      Functional, not visual. A Radio is focusable so the group can move focus
      between its Radios, and the group takes the outline from here.
    */
    :host {
      outline: none;
    }
  `,
];
