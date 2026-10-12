import { customElement } from 'lit/decorators.js';
import Field from '../field.js';
import styles from './field.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-field': StyledField;
  }
}

/**
 * Field, styled: a slab-serif label over whatever control is slotted in,
 * which takes Text Field's look.
 */
@customElement('slab-styled-field')
export default class StyledField extends Field {
  static override styles = [tokens, styles];
}
