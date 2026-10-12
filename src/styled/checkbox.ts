import { customElement } from 'lit/decorators.js';
import Checkbox from '../checkbox.js';
import styles from './checkbox.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-checkbox': StyledCheckbox;
  }
}

/**
 * Checkbox, styled: a square box that fills with ember when checked, with a
 * check or a dash drawn on it in paper.
 */
@customElement('slab-styled-checkbox')
export default class StyledCheckbox extends Checkbox {
  static override styles = [tokens, styles];
}
