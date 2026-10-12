import { customElement } from 'lit/decorators.js';
import TextField from '../text-field.js';
import textInput from './text-input.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-text-field': StyledTextField;
  }
}

/**
 * Text Field, styled: a slab-serif label over a flat, ink-bordered input that
 * casts an ember shadow while it's focused.
 */
@customElement('slab-styled-text-field')
export default class StyledTextField extends TextField {
  static override styles = [tokens, textInput];
}
