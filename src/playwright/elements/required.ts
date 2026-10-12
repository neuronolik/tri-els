// An element for `required.test.ts`, in its own module because Playwright
// tests run in Node.js while this has to be defined in the browser. The test
// imports this module by path inside `page.evaluate()`.

import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import required from '../../library/required.js';

export class WithRequiredProperty extends LitElement {
  @property()
  @required
  label?: string;
}

if (!window.customElements.get('test-with-required-property')) {
  window.customElements.define(
    'test-with-required-property',
    WithRequiredProperty,
  );
}
