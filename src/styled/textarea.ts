import { customElement } from 'lit/decorators.js';
import Textarea from '../textarea.js';
import textInput from './text-input.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-textarea': StyledTextarea;
  }
}

/**
 * Textarea, styled: Text Field's look, taller, and resizable up and down.
 */
@customElement('slab-styled-textarea')
export default class StyledTextarea extends Textarea {
  static override styles = [tokens, textInput];
}
