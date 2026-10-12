import { html } from 'lit';
import { expect, test } from './playwright/test.js';
import type Slider from './slider.js';

test(
  'is accessible',
  { tag: '@accessibility' },
  async ({ renderTemplate, page }) => {
    await renderTemplate(
      () =>
        html`<slab-slider label="Label">
          <div slot="description">Description</div>
        </slab-slider>`,
    );

    await expect(page).toBeAccessible('slab-slider');
  },
);

test('label', { tag: '@accessibility' }, async ({ page }) => {
  await page.goto('?id=slider--slider');
  await page.locator('slab-slider').waitFor();

  await expect(page.locator('slab-slider')).toMatchAriaSnapshot(`
    - slider "Label": "50"
  `);
});

test('disabled=${true}', { tag: '@accessibility' }, async ({ page }) => {
  await page.goto('?id=slider--slider');

  await page.locator('slab-slider').evaluate<void, void, Slider>((element) => {
    element.disabled = true;
  });

  await expect(page.locator('slab-slider')).toMatchAriaSnapshot(`
    - slider "Label" [disabled]: "50"
  `);
});

test('slot="description"', { tag: '@accessibility' }, async ({ page }) => {
  await page.goto('?id=slider--slider');

  await page.locator('slab-slider').evaluate((element) => {
    const description = document.createElement('div');

    description.slot = 'description';
    description.textContent = 'Description';
    element.append(description);
  });

  await expect(page.locator('slab-slider')).toMatchAriaSnapshot(`
    - slider "Label": "50"
    - text: Description
  `);
});
