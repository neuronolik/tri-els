import { html } from 'lit';
import { expect, test } from './playwright/test.js';

test(
  'is accessible',
  { tag: '@accessibility' },
  async ({ renderTemplate, page }) => {
    await renderTemplate(
      () => html`<slab-progress label="Label" value="0.5"></slab-progress>`,
    );

    await expect(page).toBeAccessible('slab-progress');
  },
);

test(
  'is accessible when indeterminate with a hidden label',
  { tag: '@accessibility' },
  async ({ renderTemplate, page }) => {
    await renderTemplate(
      () => html`<slab-progress label="Label" hide-label></slab-progress>`,
    );

    await expect(page).toBeAccessible('slab-progress');
  },
);

test('has a progressbar', { tag: '@accessibility' }, async ({ page }) => {
  await page.goto('?id=progress--progress');

  await expect(page.locator('slab-progress')).toMatchAriaSnapshot(`
    - text: Label
    - progressbar "Label"
  `);
});
