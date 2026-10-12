import { customElement } from 'lit/decorators.js';
import Alert from '../alert.js';
import styles from './alert.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-alert': StyledAlert;
  }
}

/**
 * Alert, styled: paper on ink, with a thick ember edge.
 *
 * An Alert goes on the page empty, and its message is slotted in later. Until
 * then it draws nothing, though it's still on the page for screenreaders to
 * find.
 */
@customElement('slab-styled-alert')
export default class StyledAlert extends Alert {
  static override styles = [tokens, styles];
}
