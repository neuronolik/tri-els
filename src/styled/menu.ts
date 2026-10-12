import { customElement } from 'lit/decorators.js';
import Menu from '../menu.js';
import styles from './menu.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-menu': StyledMenu;
  }
}

/**
 * Menu, styled: its Menu Items in a paper panel with an ink border and a hard
 * shadow.
 */
@customElement('slab-styled-menu')
export default class StyledMenu extends Menu {
  static override styles = [tokens, styles];
}
