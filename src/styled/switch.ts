import { customElement } from 'lit/decorators.js';
import Switch from '../switch.js';
import styles from './switch.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-switch': StyledSwitch;
  }
}

/**
 * Switch, styled: a settings row with the label on the left and a square
 * thumb that slides across a track, which turns ember when it's on.
 */
@customElement('slab-styled-switch')
export default class StyledSwitch extends Switch {
  static override styles = [tokens, styles];
}
