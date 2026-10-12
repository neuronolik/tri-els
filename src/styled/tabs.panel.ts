import { customElement } from 'lit/decorators.js';
import Panel from '../tabs.panel.js';
import styles from './tabs.panel.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-tabs-panel': StyledPanel;
  }
}

/**
 * Panel, styled: room around its content, and the same focus ring as
 * everything else when it's focused itself.
 */
@customElement('slab-styled-tabs-panel')
export default class StyledPanel extends Panel {
  static override styles = [tokens, styles];
}
