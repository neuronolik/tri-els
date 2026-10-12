import { customElement } from 'lit/decorators.js';
import TreeItem from '../tree.item.js';
import styles from './tree.item.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-tree-item': StyledTreeItem;
  }
}

/**
 * Tree Item, styled: a row with a chevron that turns down when it's
 * expanded, inverting to paper on ink while it's active, as Option does.
 * Its children are indented under a rule.
 */
@customElement('slab-styled-tree-item')
export default class StyledTreeItem extends TreeItem {
  static override styles = [tokens, styles];
}
