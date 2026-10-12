import { customElement } from 'lit/decorators.js';
import Form from '../form.js';
import styles from './form.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-form': StyledForm;
  }
}

/**
 * Form, styled: its fields stacked, with room between them.
 */
@customElement('slab-styled-form')
export default class StyledForm extends Form {
  static override styles = [tokens, styles];
}
