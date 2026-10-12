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
import styles from './menu.item.styles.js';

declare global {
  interface HTMLElementTagNameMap {
    'slab-menu-item': MenuItem;
  }
}

/**
 * A Menu Item with no visual styles. The host is the menu item, so style it
 * directly.
 *
 * Listen for "click" on it to act on it. Its Menu clicks it for Enter and
 * Space, the way a button is clicked from the keyboard, and closes once it
 * has. A disabled Menu Item isn't clicked, again like a button.
 *
 * It's never focused. Focus stays on its Menu, which points at the active Menu
 * Item with `aria-activedescendant`.
 *
 * Its Menu sets `:state(active)`. It sets `:state(disabled)` itself.
 *
 * @attr {boolean} [disabled=false]
 * @attr {string} [label] - Names the Menu Item in place of its text, and is what typeahead matches against.
 *
 * @readonly
 * @attr {string} [version]
 *
 * @slot {Element | string} - The label, plus anything else a design puts in a Menu Item
 *
 * @readonly
 * @prop {string} text - What the user reads as the Menu Item's name: its label, or its text when it has no label.
 */
@customElement('slab-menu-item')
export default class MenuItem extends LitElement {
  /**
   * Names the Menu Item in place of its text, and is what typeahead matches
   * against.
   */
  @property({ reflect: true })
  label?: string;

  @property({ reflect: true, type: Boolean })
  disabled = false;

  @property({ reflect: true })
  readonly version: string = packageJson.version;

  /**
   * What the user reads as the Menu Item's name: its label, or its text when
   * it has no label.
   *
   * @readonly
   */
  get text(): string {
    const text = typeof this.label === 'string' ? this.label : this.textContent;

    return text.replaceAll(/\s+/g, ' ').trim();
  }

  override connectedCallback() {
    super.connectedCallback();

    // ARIA goes on attributes rather than on ElementInternals. Screenreaders
    // read both. But Playwright's role queries and ARIA snapshots, and Axe,
    // only read attributes, which would leave the ARIA untested.
    this.setAttribute('role', 'menuitem');
  }

  override firstUpdated() {
    // Announced rather than left to "slotchange" because a Menu Item whose
    // definition loads after its Menu's upgrades in place, and an upgrade
    // isn't a change to the Menu's child list.
    this.dispatchEvent(new Event('private-connected', { bubbles: true }));
  }

  // Private because it's only meant to be called by ItemsController, which
  // keeps one active Menu Item at a time for a Menu.
  privateSetActive(isActive: boolean) {
    this.#setState('active', isActive);
  }

  override render() {
    return html`<slot>
      <!--
        The label, plus anything else a design puts in a Menu Item
        @type {Element | string}
      -->
    </slot>`;
  }

  override updated(changes: PropertyValues<this>) {
    if (changes.has('disabled')) {
      this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
      this.#setState('disabled', this.disabled);

      // The Menu moves the active Menu Item off one that's disabled.
      this.dispatchEvent(
        new Event('private-disabled-change', { bubbles: true }),
      );
    }

    if (changes.has('label')) {
      // Removing the attribute sets `label` to `null` rather than back to
      // `undefined`, so it's the type that's checked.
      if (typeof this.label === 'string') {
        this.setAttribute('aria-label', this.label);
      } else {
        this.removeAttribute('aria-label');
      }
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

    // In the constructor so it's the first listener on the Menu Item, and a
    // consumer's own "click" listeners, added later, are stopped by it. Ones
    // further out never hear it either, the way no one hears a disabled
    // button's click.
    this.addEventListener('click', this.#onClick, { capture: true });
  }

  #internals: ElementInternals;

  #onClick = (event: MouseEvent) => {
    if (this.disabled) {
      event.stopImmediatePropagation();
    }
  };

  #setState(state: string, isActive: boolean) {
    if (isActive) {
      this.#internals.states.add(state);
    } else {
      this.#internals.states.delete(state);
    }
  }
}
