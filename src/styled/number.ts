import { customElement } from 'lit/decorators.js';
import NumberField from '../number.js';
import textInput from './text-input.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-number': StyledNumberField;
  }
}

/**
 * Number, styled: Text Field's look, with the browser's own stepper.
 */
@customElement('slab-styled-number')
export default class StyledNumberField extends NumberField {
  static override styles = [tokens, textInput];
}
