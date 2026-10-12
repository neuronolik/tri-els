import { css } from 'lit';
import visuallyHidden from './library/visually-hidden.js';

export default [
  css`
    /*
      Functional, not visual. A hidden label still names the Select, so it's
      hidden visually rather than removed.
    */
    ${visuallyHidden(":host([hide-label]) [part~='label']")}
  `,
  css`
    /*
      Functional, not visual. The popover is put beside the combobox and kept
      on screen, the way Popover's is beside its anchor, and nothing more.
      The anchor name is tree-scoped to this shadow root.
    */
    [part~='combobox'] {
      anchor-name: --combobox;

      /*
        With nothing selected and no placeholder, the combobox would have no
        content, and so no height to click.
      */
      min-block-size: 1lh;
    }

    [part~='popover'] {
      inset: auto;
      margin: 0;
      position-anchor: --combobox;
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
