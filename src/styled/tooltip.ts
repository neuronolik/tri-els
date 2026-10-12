import { customElement } from 'lit/decorators.js';
import Tooltip from '../tooltip.js';
import styles from './tooltip.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-tooltip': StyledTooltip;
  }
}

/**
 * Tooltip, styled: a small block of paper-on-ink monospace with an ember
 * shadow.
 */
@customElement('slab-styled-tooltip')
export default class StyledTooltip extends Tooltip {
  static override styles = [tokens, styles];
}
