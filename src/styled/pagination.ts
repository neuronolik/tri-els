import { customElement } from 'lit/decorators.js';
import Pagination from '../pagination.js';
import styles from './pagination.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-pagination': StyledPagination;
  }
}

/**
 * Pagination, styled: a course of square buttons, with the current page in
 * ink.
 */
@customElement('slab-styled-pagination')
export default class StyledPagination extends Pagination {
  static override styles = [tokens, styles];
}
