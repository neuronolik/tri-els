import { customElement } from 'lit/decorators.js';
import Radio from '../radio-group.radio.js';
import styles from './radio-group.radio.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-radio-group-radio': StyledRadio;
  }
}

/**
 * Radio, styled: a card with a round mark in its corner. Checked, its border
 * turns ember and it lifts off the page on a hard shadow.
 */
@customElement('slab-styled-radio-group-radio')
export default class StyledRadio extends Radio {
  static override styles = [tokens, styles];
}
