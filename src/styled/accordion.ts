import { customElement } from 'lit/decorators.js';
import Accordion from '../accordion.js';
import styles from './accordion.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-accordion': StyledAccordion;
  }
}

/**
 * Accordion, styled: a heavy ink rule over its Disclosures, which rule
 * themselves off from each other.
 */
@customElement('slab-styled-accordion')
export default class StyledAccordion extends Accordion {
  static override styles = [tokens, styles];
}
