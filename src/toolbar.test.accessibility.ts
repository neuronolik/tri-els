import { html } from 'lit';
import { expect, test } from './playwright/test.js';

test(
  'is accessible',
  { tag: '@accessibility' },
  async ({ renderTemplate, page }) => {
    await renderTemplate(
      () => html`
        <slab-toolbar label="Label">
          <button>One</button>
          <button disabled>Two</button>
        </slab-toolbar>
      `,
    );

    await expect(page).toBeAccessible('slab-toolbar');
  },
);

test(
  'is accessible when vertical',
  { tag: '@accessibility' },
  async ({ renderTemplate, page }) => {
    await renderTemplate(
      () => html`
        <slab-toolbar label="Label" orientation="vertical">
          <button>One</button>
        </slab-toolbar>
      `,
    );

    await expect(page).toBeAccessible('slab-toolbar');
  },
);

test('has a toolbar', { tag: '@accessibility' }, async ({ page }) => {
  await page.goto('?id=toolbar--toolbar');

  await expect(page.locator('slab-toolbar')).toMatchAriaSnapshot(`
    - toolbar "Label":
      - button "One"
      - button "Two"
      - button "Three"
  `);
});
