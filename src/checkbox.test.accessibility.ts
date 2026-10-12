import { html } from 'lit';
import { expect, test } from './playwright/test.js';
import type Checkbox from './checkbox.js';

test(
  'is accessible',
  { tag: '@accessibility' },
  async ({ renderTemplate, page }) => {
    await renderTemplate(
      () =>
        html`<slab-checkbox label="Label">
          <div slot="description">Description</div>
        </slab-checkbox>`,
    );

    await expect(page).toBeAccessible('slab-checkbox');
  },
);

test('checked=${true}', { tag: '@accessibility' }, async ({ page }) => {
  await page.goto('?id=checkbox--checkbox');

  await page
    .locator('slab-checkbox')
    .evaluate<void, void, Checkbox>((element) => {
      element.checked = true;
    });

  await expect(page.locator('slab-checkbox')).toMatchAriaSnapshot(`
    - checkbox "Label" [checked]
    - text: Label
  `);
});

test('checked=${false}', { tag: '@accessibility' }, async ({ page }) => {
  await page.goto('?id=checkbox--checkbox');
  await page.locator('slab-checkbox').waitFor();

  await expect(page.locator('slab-checkbox')).toMatchAriaSnapshot(`
    - checkbox "Label"
    - text: Label
  `);
});

test('disabled=${true}', { tag: '@accessibility' }, async ({ page }) => {
  await page.goto('?id=checkbox--checkbox');

  await page
    .locator('slab-checkbox')
    .evaluate<void, void, Checkbox>((element) => {
      element.disabled = true;
    });

  await expect(page.locator('slab-checkbox')).toMatchAriaSnapshot(`
    - checkbox "Label" [disabled]
    - text: Label
  `);
});

test('hide-label', { tag: '@accessibility' }, async ({ page }) => {
  await page.goto('?id=checkbox--checkbox');

  await page
    .locator('slab-checkbox')
    .evaluate<void, void, Checkbox>((element) => {
      element.hideLabel = true;
    });

  // Hidden visually, so it still names the checkbox.
  await expect(page.locator('slab-checkbox')).toMatchAriaSnapshot(`
    - checkbox "Label"
    - text: Label
  `);
});

test('indeterminate', { tag: '@accessibility' }, async ({ page }) => {
  await page.goto('?id=checkbox--checkbox');

  await page
    .locator('slab-checkbox')
    .evaluate<void, void, Checkbox>((element) => {
      element.indeterminate = true;
    });

  await expect(page.locator('slab-checkbox')).toMatchAriaSnapshot(`
    - checkbox "Label" [checked=mixed]
    - text: Label
  `);
});

test('slot="description"', { tag: '@accessibility' }, async ({ page }) => {
  await page.goto('?id=checkbox--checkbox');

  await page
    .locator('slab-checkbox')
    .evaluate<void, void, Checkbox>((element) => {
      const div = document.createElement('div');

      div.textContent = 'Description';
      div.slot = 'description';

      element.append(div);
    });

  await expect(page.locator('slab-checkbox')).toMatchAriaSnapshot(`
    - checkbox "Label"
    - text: Label Description
  `);
});
