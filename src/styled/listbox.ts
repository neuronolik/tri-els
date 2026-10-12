import { customElement } from 'lit/decorators.js';
import Listbox from '../listbox.js';
import styles from './listbox.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-listbox': StyledListbox;
  }
}

/**
 * Listbox, styled: its Options in an ink-bordered box that casts an ember
 * shadow while it's focused.
 */
@customElement('slab-styled-listbox')
export default class StyledListbox extends Listbox {
  static override styles = [tokens, styles];
}
