import { customElement } from 'lit/decorators.js';
import RadioGroup from '../radio-group.js';
import styles from './radio-group.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-radio-group': StyledRadioGroup;
  }
}

/**
 * Radio Group, styled: its Radios laid in a row of cards, like bricks in a
 * course, wrapping when there isn't room.
 */
@customElement('slab-styled-radio-group')
export default class StyledRadioGroup extends RadioGroup {
  static override styles = [tokens, styles];
}
