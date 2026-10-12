// Elements for `assert-slot.test.ts`, in their own module because Playwright
// tests run in Node.js while these have to be defined in the browser. Tests
// import this module by path inside `page.evaluate()`.

import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import assertSlot from '../../library/assert-slot.js';

export class WithSlot extends LitElement {
  @property()
  name?: string;

  @property({ type: Boolean })
  optional = false;

  @property({ type: Array })
  slotted?: (typeof Element | typeof Text)[] = [];

  override render() {
    return html`<slot
      name=${ifDefined(this.name)}
      ${assertSlot(this.slotted, this.optional)}
    ></slot>`;
  }
}

export class WhenNotUsedOnSlot extends LitElement {
  override render() {
    return html`<div ${assertSlot()}></div>`;
  }
}

export class WhenNotUsedInsideATag extends LitElement {
  override render() {
    return html`<slot>${assertSlot()}</slot>`;
  }
}

export class Reslotted extends LitElement {
  @property()
  name?: string;

  @property({ type: Boolean })
  optional = false;

  @property({ type: Array })
  slotted?: (typeof Element | typeof Text)[] = [];

  override render() {
    return html`<test-with-slot
      name=${ifDefined(this.name)}
      .slotted=${this.slotted}
      ?optional=${this.optional}
    >
      <slot name=${ifDefined(this.name)}></slot>
    </test-with-slot>`;
  }
}

if (!window.customElements.get('test-with-slot')) {
  window.customElements.define('test-with-slot', WithSlot);
  window.customElements.define('test-when-not-used-on-slot', WhenNotUsedOnSlot);

  window.customElements.define(
    'test-when-not-used-inside-tag',
    WhenNotUsedInsideATag,
  );

  window.customElements.define('test-reslotted', Reslotted);
}
