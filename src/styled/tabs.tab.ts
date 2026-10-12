import { customElement } from 'lit/decorators.js';
import Tab from '../tabs.tab.js';
import styles from './tabs.tab.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-tabs-tab': StyledTab;
  }
}

/**
 * Tab, styled: slab-serif capitals that invert to paper on ink when the Tab
 * is selected, with an ember cap.
 */
@customElement('slab-styled-tabs-tab')
export default class StyledTab extends Tab {
  static override styles = [tokens, styles];
}
