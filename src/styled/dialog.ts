import { customElement } from 'lit/decorators.js';
import Dialog from '../dialog.js';
import styles from './dialog.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-dialog': StyledDialog;
  }
}

/**
 * Dialog, styled: a paper slab under an ink header with an ember base, casting
 * an ember shadow over a dimmed page.
 */
@customElement('slab-styled-dialog')
export default class StyledDialog extends Dialog {
  static override styles = [tokens, styles];
}
