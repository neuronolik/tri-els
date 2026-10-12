import { customElement } from 'lit/decorators.js';
import Toolbar from '../toolbar.js';
import styles from './toolbar.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-toolbar': StyledToolbar;
  }
}

/**
 * Toolbar, styled: a raised bar of controls, with a pressed one in ink.
 */
@customElement('slab-styled-toolbar')
export default class StyledToolbar extends Toolbar {
  static override styles = [tokens, styles];
}
