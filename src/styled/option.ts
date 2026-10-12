import { customElement } from 'lit/decorators.js';
import Option from '../option.js';
import styles from './option.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-option': StyledOption;
  }
}

/**
 * Option, styled: a row that inverts to paper on ink while it's active, with
 * an ember bar on its edge, and a check while it's selected.
 */
@customElement('slab-styled-option')
export default class StyledOption extends Option {
  static override styles = [tokens, styles];
}
