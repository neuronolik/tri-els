import { customElement } from 'lit/decorators.js';
import Meter from '../meter.js';
import styles from './meter.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-meter': StyledMeter;
  }
}

/**
 * Meter, styled: Progress's bar, solid rather than in bricks. Ink while the
 * value is in the optimum region, ember outside it, and hatched deep ember
 * when it's furthest from it.
 */
@customElement('slab-styled-meter')
export default class StyledMeter extends Meter {
  static override styles = [tokens, styles];
}
