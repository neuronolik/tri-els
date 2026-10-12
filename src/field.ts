import {
  html,
  LitElement,
  type CSSResultGroup,
  type CSSResultOrNative,
  type PropertyValues,
} from 'lit';
import { property } from 'lit/decorators.js';
import packageJson from '../package.json' with { type: 'json' };
import customElement from './library/custom-element.js';
import assertSlot from './library/assert-slot.js';
import uniqueId from './library/unique-id.js';
import styles from './field.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-field': Field;
  }
}

/**
 * A label and the control it names, with no visual styles.
 *
 * Field wires the two together. Both are slotted, so they're in the same tree
 * and no ID reference has to cross a shadow root: Field gives the control an
 * `id` and points the label's `for` at it. A `for` or an `id` that's already
 * set is left alone, so a consumer who wants to wire it themselves can.
 *
 * Beyond that, what Field provides is a place for each piece and custom states
 * for what a design needs to know about them: `:state(disabled)`,
 * `:state(error)`, and `:state(required)`.
 *
 * `required` renders nothing. A design that wants an asterisk adds one from
 * outside, through `::part(label)`. Layout is the same: where the label sits
 * relative to its control is for the styles around it, not for this class.
 *
 * `hide-label` hides the label visually and leaves it where screenreaders and
 * a `<label for>` can still reach it.
 *
 * @attr {boolean} [disabled=false]
 * @attr {boolean} [error=false]
 * @attr {boolean} [hide-label=false]
 * @attr {boolean} [required=false]
 *
 * @readonly
 * @attr {string} [version]
 *
 * @slot {Element | string}
 * @slot {Element} [control]
 * @slot {Element | string} [description]
 *
 * @csspart control - The control the label names
 * @csspart description - Text about the control, such as a hint or an error
 * @csspart label - The label
 */
@customElement('slab-field')
export default class Field extends LitElement {
  @property({ reflect: true, type: Boolean })
  disabled = false;

  @property({ reflect: true, type: Boolean })
  error = false;

  @property({ attribute: 'hide-label', reflect: true, type: Boolean })
  hideLabel = false;

  @property({ reflect: true, type: Boolean })
  required = false;

  @property({ reflect: true })
  readonly version: string = packageJson.version;

  override render() {
    return html`<div part="label">
        <!-- The label -->
        <slot @slotchange=${this.#onSlotChange} ${assertSlot()}>
          <!-- @type {Element | string} -->
        </slot>
      </div>

      <div part="control">
        <!-- The control the label names -->
        <slot name="control" @slotchange=${this.#onSlotChange} ${assertSlot()}>
          <!-- @type {Element} -->
        </slot>
      </div>

      <div part="description">
        <!-- Text about the control, such as a hint or an error -->
        <slot name="description">
          <!-- @type {Element | string} -->
        </slot>
      </div>`;
  }

  override updated(changes: PropertyValues<this>) {
    if (changes.has('disabled')) {
      this.#setState('disabled', this.disabled);
    }

    if (changes.has('error')) {
      this.#setState('error', this.error);
    }

    if (changes.has('required')) {
      this.#setState('required', this.required);
    }
  }

  // Functional styles go in here rather than in `styles`, so a subclass that
  // sets its own `styles` keeps them.
  protected static override finalizeStyles(
    subclassStyles?: CSSResultGroup,
  ): CSSResultOrNative[] {
    return super.finalizeStyles([styles, subclassStyles ?? []]);
  }

  constructor() {
    super();
    this.#internals = this.attachInternals();
  }

  #internals: ElementInternals;

  // The label and the control are both slotted, so they're in the same tree and
  // a plain `for` reaches across. Only an unwired pair is touched: a consumer
  // who set `for` or `id` themselves meant it.
  #onSlotChange() {
    const label = this.querySelector('label:not([slot])');
    const control = this.querySelector('[slot="control"]');

    if (!label || !control || label.hasAttribute('for')) {
      return;
    }

    if (!control.id) {
      control.id = uniqueId();
    }

    label.setAttribute('for', control.id);
  }

  #setState(state: string, isActive: boolean) {
    if (isActive) {
      this.#internals.states.add(state);
    } else {
      this.#internals.states.delete(state);
    }
  }
}
