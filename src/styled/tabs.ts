import { customElement } from 'lit/decorators.js';
import Tabs from '../tabs.js';
import styles from './tabs.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-tabs': StyledTabs;
  }
}

/**
 * Tabs, styled: its Tabs sit on an ink rule, and the selected one is a block
 * of ink standing on it.
 */
@customElement('slab-styled-tabs')
export default class StyledTabs extends Tabs {
  static override styles = [tokens, styles];
}
