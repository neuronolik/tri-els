import { customElement } from 'lit/decorators.js';
import Tree from '../tree.js';
import styles from './tree.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-tree': StyledTree;
  }
}

/**
 * Tree, styled: its Tree Items in an ink-bordered box that casts an ember
 * shadow while it's focused.
 */
@customElement('slab-styled-tree')
export default class StyledTree extends Tree {
  static override styles = [tokens, styles];
}
