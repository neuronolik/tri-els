import { customElement } from 'lit/decorators.js';
import MenuItem from '../menu.item.js';
import styles from './menu.item.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-menu-item': StyledMenuItem;
  }
}

/**
 * Menu Item, styled: a row that inverts to paper on ink while it's active,
 * with an ember bar on its edge, as Option does. Hovering makes it active.
 */
@customElement('slab-styled-menu-item')
export default class StyledMenuItem extends MenuItem {
  static override styles = [tokens, styles];
}
