import { html } from 'lit';
import { expect, test } from './playwright/test.js';
import type Popover from './popover.js';

test(
  'is accessible',
  { tag: '@accessibility' },
  async ({ renderTemplate, page }) => {
    await renderTemplate(
      () =>
        html`<slab-popover open>
          <button slot="anchor">Anchor</button>
          Content
        </slab-popover>`,
    );

    await expect(page).toBeAccessible('slab-popover');
  },
);

test('open=${false}', { tag: '@accessibility' }, async ({ page }) => {
  await page.goto('?id=popover--popover');
  await page.locator('slab-popover').waitFor();

  await expect(page.locator('slab-popover')).toMatchAriaSnapshot(`
    - button "Anchor" [expanded=false]
  `);
});

test('open=${true}', { tag: '@accessibility' }, async ({ page }) => {
  await page.goto('?id=popover--popover');

  await page
    .locator('slab-popover')
    .evaluate<void, void, Popover>((element) => {
      element.open = true;
    });

  await expect(page.locator('slab-popover')).toMatchAriaSnapshot(`
    - button "Anchor" [expanded]
    - text: Content
  `);
});
