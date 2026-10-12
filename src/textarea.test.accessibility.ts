import { html } from 'lit';
import { expect, test } from './playwright/test.js';
import type Textarea from './textarea.js';

test(
  'is accessible',
  { tag: '@accessibility' },
  async ({ renderTemplate, page }) => {
    await renderTemplate(
      () =>
        html`<slab-textarea label="Label">
          <div slot="description">Description</div>
        </slab-textarea>`,
    );

    await expect(page).toBeAccessible('slab-textarea');
  },
);

test('label', { tag: '@accessibility' }, async ({ page }) => {
  await page.goto('?id=textarea--textarea');
  await page.locator('slab-textarea').waitFor();

  await expect(page.locator('slab-textarea')).toMatchAriaSnapshot(`
    - textbox "Label"
  `);
});

test('disabled=${true}', { tag: '@accessibility' }, async ({ page }) => {
  await page.goto('?id=textarea--textarea');

  await page
    .locator('slab-textarea')
    .evaluate<void, void, Textarea>((element) => {
      element.disabled = true;
    });

  await expect(page.locator('slab-textarea')).toMatchAriaSnapshot(`
    - textbox "Label" [disabled]
  `);
});

test('readonly=${true}', { tag: '@accessibility' }, async ({ page }) => {
  await page.goto('?id=textarea--textarea');

  await page
    .locator('slab-textarea')
    .evaluate<void, void, Textarea>((element) => {
      element.readonly = true;
    });

  await expect(page.locator('slab-textarea')).toMatchAriaSnapshot(`
    - textbox "Label"
  `);
});

test('required', { tag: '@accessibility' }, async ({ page }) => {
  await page.goto('?id=textarea--textarea');

  await page
    .locator('slab-textarea')
    .evaluate<void, void, Textarea>((element) => {
      element.required = true;
    });

  await expect(page.locator('slab-textarea')).toMatchAriaSnapshot(`
    - textbox "Label"
  `);
});

test('slot="description"', { tag: '@accessibility' }, async ({ page }) => {
  await page.goto('?id=textarea--textarea');

  await page.locator('slab-textarea').evaluate((element) => {
    const description = document.createElement('div');

    description.slot = 'description';
    description.textContent = 'Description';
    element.append(description);
  });

  await expect(page.locator('slab-textarea')).toMatchAriaSnapshot(`
    - textbox "Label"
    - text: Description
  `);
});
