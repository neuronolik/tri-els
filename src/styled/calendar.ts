import { customElement } from 'lit/decorators.js';
import Calendar from '../calendar.js';
import styles from './calendar.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-calendar': StyledCalendar;
  }
}

/**
 * Calendar, styled: a raised slab of days, with today ringed in ember and
 * the selected day in ink.
 */
@customElement('slab-styled-calendar')
export default class StyledCalendar extends Calendar {
  static override styles = [tokens, styles];
}
