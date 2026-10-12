import { type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators.js';
import Slider from '../slider.js';
import styles from './slider.styles.js';
import tokens from './tokens.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-styled-slider': StyledSlider;
  }
}

/**
 * Slider, styled: an ink track filled with ember up to a tall, brick-shaped
 * thumb.
 *
 * Only Firefox can style the part of a range input's track before its thumb.
 * Everywhere else the fill is a gradient, so how far along the value is goes
 * to the input as `--fill`.
 *
 * It's set after each update, for `value`, `min` and `max` set from outside,
 * and on "input", for dragging. Dragging doesn't update the Slider: `value`
 * is read from the input, so it has already changed by the time Slider sets
 * it, and Lit sees nothing new.
 */
@customElement('slab-styled-slider')
export default class StyledSlider extends Slider {
  static override styles = [tokens, styles];

  override updated(changes: PropertyValues) {
    super.updated(changes);
    this.#updateFill();
  }

  constructor() {
    super();
    this.addEventListener('input', this.#updateFill);
  }

  #updateFill = () => {
    const min = this.min ?? 0;
    const max = this.max ?? 100;

    const fill =
      max > min ? ((Number(this.value) - min) / (max - min)) * 100 : 0;

    this.shadowRoot
      ?.querySelector<HTMLElement>("[part~='input']")
      ?.style.setProperty('--fill', `${fill}%`);
  };
}
