import { customElement } from 'lit/decorators.js';
import Select from '../select.js';
import styles from './select.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-select': StyledSelect;
  }
}

/**
 * Select, styled: Text Field's box with a chevron that turns over when it
 * opens, and its Options in a panel that casts a hard shadow.
 */
@customElement('slab-styled-select')
export default class StyledSelect extends Select {
  static override styles = [tokens, styles];
}
