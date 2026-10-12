import { customElement } from 'lit/decorators.js';
import Breadcrumb from '../breadcrumb.js';
import styles from './breadcrumb.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-breadcrumb': StyledBreadcrumb;
  }
}

/**
 * Breadcrumb, styled: slab-serif links underlined in ember, divided by ember
 * slashes, with the current page in bold.
 */
@customElement('slab-styled-breadcrumb')
export default class StyledBreadcrumb extends Breadcrumb {
  static override styles = [tokens, styles];
}
