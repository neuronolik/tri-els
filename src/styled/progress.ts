import { customElement } from 'lit/decorators.js';
import Progress from '../progress.js';
import styles from './progress.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-progress': StyledProgress;
  }
}

/**
 * Progress, styled: an ink-bordered bar laid with ember bricks as the task
 * goes, and bricks that march across it while how far along isn't known.
 */
@customElement('slab-styled-progress')
export default class StyledProgress extends Progress {
  static override styles = [tokens, styles];
}
