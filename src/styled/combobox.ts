import { customElement } from 'lit/decorators.js';
import Combobox from '../combobox.js';
import textInput from './text-input.styles.js';
import styles from './combobox.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-combobox': StyledCombobox;
  }
}

/**
 * Combobox, styled: Text Field's input, with its Options in a panel that
 * casts a hard shadow, as Select's do.
 */
@customElement('slab-styled-combobox')
export default class StyledCombobox extends Combobox {
  static override styles = [tokens, textInput, styles];
}
