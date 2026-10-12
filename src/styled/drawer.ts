import { customElement } from 'lit/decorators.js';
import Drawer from '../drawer.js';
import dialog from './dialog.styles.js';
import styles from './drawer.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-drawer': StyledDrawer;
  }
}

/**
 * Drawer, styled: Dialog's header and edges, as a full-height panel on the
 * page's end edge.
 */
@customElement('slab-styled-drawer')
export default class StyledDrawer extends Drawer {
  static override styles = [tokens, dialog, styles];
}
