import { customElement } from 'lit/decorators.js';
import CheckboxGroup from '../checkbox-group.js';
import styles from './checkbox-group.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-checkbox-group': StyledCheckboxGroup;
  }
}

/**
 * Checkbox Group, styled: a slab-serif label over its Checkboxes, stacked.
 */
@customElement('slab-styled-checkbox-group')
export default class StyledCheckboxGroup extends CheckboxGroup {
  static override styles = [tokens, styles];
}
