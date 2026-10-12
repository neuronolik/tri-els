import { css } from 'lit';

export default [
  css`
    /*
      Functional, not visual. The popover is put beside its anchor and kept on
      screen, the way Popover's is, and nothing more. The anchor name is
      tree-scoped to this shadow root.
    */
    ::slotted([slot='anchor']) {
      anchor-name: --anchor;
    }

    [part~='popover'] {
      inset: auto;
      margin: 0;
      position-anchor: --anchor;
      position-area: bottom;
      position-try-fallbacks: flip-block, flip-inline;
    }

    :host([placement='top']) [part~='popover'] {
      position-area: top;
    }

    :host([placement='left']) [part~='popover'] {
      position-area: left;
    }

    :host([placement='right']) [part~='popover'] {
      position-area: right;
    }
  `,
];
