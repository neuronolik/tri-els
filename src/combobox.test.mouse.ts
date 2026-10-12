import { html } from 'lit';
import { expect, test } from './playwright/test.js';

test(
  'opens when its input is clicked',
  { tag: '@mouse' },
  async ({ renderTemplate, page }) => {
    await renderTemplate(
      () =>
        html`<slab-combobox label="Label">
          <slab-option>One</slab-option>
        </slab-combobox>`,
    );

    await page.getByRole('combobox').click();

    await expect(page.getByRole('listbox')).toBeVisible();

    await expect(page.getByRole('combobox')).toHaveAttribute(
      'aria-expanded',
      'true',
    );
  },
);

test(
  'selects options on click',
  { tag: '@mouse' },
  async ({ renderTemplate, page }) => {
    await renderTemplate(
      () =>
        html`<slab-combobox label="Label">
          <slab-option value="one">One</slab-option>
          <slab-option value="two"><span>Two</span></slab-option>
        </slab-combobox>`,
    );

    const host = page.locator('slab-combobox');
    const options = page.locator('slab-option');

    await page.getByRole('combobox').click();

    await expect(host).toDispatchEvents(
      () => options.nth(0).click(),
      [
        { type: 'input', bubbles: true, cancelable: false, composed: true },
        { type: 'change', bubbles: true, cancelable: false, composed: true },
      ],
    );

    await expect(host).toHaveJSProperty('value', 'one');
    await expect(page.getByRole('combobox')).toHaveValue('One');
    await expect(page.getByRole('listbox')).toBeHidden();

    // The click's "mousedown" is cancelled, so focus stays in the input.
    await expect(page.getByRole('combobox')).toBeFocused();

    // On an element inside the option.
    await page.getByRole('combobox').click();
    await page.locator('slab-option span').click();

    await expect(host).toHaveJSProperty('value', 'two');
    await expect(options.nth(0)).toHaveJSProperty('selected', false);
    await expect(options.nth(1)).toHaveJSProperty('selected', true);
  },
);

test(
  'ignores clicks on disabled options and between options',
  { tag: '@mouse' },
  async ({ renderTemplate, page }) => {
    await renderTemplate(
      () =>
        html`<slab-combobox label="Label">
          <slab-option disabled>One</slab-option>
        </slab-combobox>`,
    );

    const host = page.locator('slab-combobox');

    await page.getByRole('combobox').click();

    await expect(host).not.toDispatchEvents(
      () => page.locator('slab-option').click({ force: true }),
      [{ type: 'input' }, { type: 'change' }],
    );

    // On the listbox itself rather than an option.
    await page.getByRole('listbox').evaluate((element: HTMLElement) => {
      element.click();
    });

    await expect(host).toHaveJSProperty('value', '');
    await expect(page.getByRole('listbox')).toBeVisible();
  },
);

test(
  'closes when clicked outside of',
  { tag: '@mouse' },
  async ({ renderTemplate, page }) => {
    await renderTemplate(
      () =>
        html`<slab-combobox label="Label">
            <slab-option value="one">One</slab-option>
          </slab-combobox>

          <button>Button</button>`,
    );

    const host = page.locator('slab-combobox');

    await page.getByRole('combobox').pressSequentially('one');

    // Light dismiss commits what was typed, the same as a blur by Tab.
    await expect(host).toDispatchEvents(
      () => page.getByRole('button').click(),
      [{ type: 'input' }, { type: 'change' }],
    );

    await expect(page.getByRole('listbox')).toBeHidden();
    await expect(host).toHaveJSProperty('open', false);
    await expect(host).toHaveJSProperty('value', 'one');
  },
);
