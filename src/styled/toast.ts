import { customElement } from 'lit/decorators.js';
import Toast from '../toast.js';
import styles from './toast.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-toast': StyledToast;
  }
}

/**
 * Toast, styled: paper on ink in the page's bottom corner, with an ember edge
 * and a hard shadow, rising into place when it's shown.
 */
@customElement('slab-styled-toast')
export default class StyledToast extends Toast {
  static override styles = [tokens, styles];
}
