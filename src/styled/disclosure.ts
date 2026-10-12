import { customElement } from 'lit/decorators.js';
import Disclosure from '../disclosure.js';
import styles from './disclosure.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-disclosure': StyledDisclosure;
  }
}

/**
 * Disclosure, styled: a slab-serif summary with a square marker at its end,
 * a plus on ink that turns to a minus on ember when it's open.
 */
@customElement('slab-styled-disclosure')
export default class StyledDisclosure extends Disclosure {
  static override styles = [tokens, styles];
}
