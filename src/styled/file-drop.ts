import { customElement } from 'lit/decorators.js';
import FileDrop from '../file-drop.js';
import textInput from './text-input.styles.js';
import styles from './file-drop.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-file-drop': StyledFileDrop;
  }
}

/**
 * File Drop, styled: a dashed drop zone with a button for the picker, which
 * turns ember while files are dragged over it.
 */
@customElement('slab-styled-file-drop')
export default class StyledFileDrop extends FileDrop {
  static override styles = [tokens, textInput, styles];
}
