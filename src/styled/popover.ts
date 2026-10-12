import { customElement } from 'lit/decorators.js';
import Popover from '../popover.js';
import styles from './popover.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-popover': StyledPopover;
  }
}

/**
 * Popover, styled: a paper panel with an ink border and a hard shadow, as
 * Menu's is.
 */
@customElement('slab-styled-popover')
export default class StyledPopover extends Popover {
  static override styles = [tokens, styles];
}
