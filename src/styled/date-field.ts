import { customElement } from 'lit/decorators.js';
import DateField from '../date-field.js';
import textInput from './text-input.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-date-field': StyledDateField;
  }
}

/**
 * Date Field, styled: Text Field's look, with the browser's own picker.
 */
@customElement('slab-styled-date-field')
export default class StyledDateField extends DateField {
  static override styles = [tokens, textInput];
}
