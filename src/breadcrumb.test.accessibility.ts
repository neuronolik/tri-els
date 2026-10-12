import { html } from 'lit';
import { expect, test } from './playwright/test.js';

test(
  'is accessible',
  { tag: '@accessibility' },
  async ({ renderTemplate, page }) => {
    await renderTemplate(
      () => html`
        <slab-breadcrumb>
          <a href="#">One</a>
          <a href="#">Two</a>
        </slab-breadcrumb>
      `,
    );

    await expect(page).toBeAccessible('slab-breadcrumb');
  },
);

test('has a navigation', { tag: '@accessibility' }, async ({ page }) => {
  await page.goto('?id=breadcrumb--breadcrumb');

  await expect(page.locator('slab-breadcrumb')).toMatchAriaSnapshot(`
    - navigation "Breadcrumb":
      - list:
        - listitem:
          - link "One":
            - /url: "#"
        - listitem:
          - link "Two":
            - /url: "#"
        - listitem:
          - link "Three":
            - /url: "#"
  `);
});

test('label', { tag: '@accessibility' }, async ({ page }) => {
  await page.goto('?id=breadcrumb--breadcrumb&args=label:Label');

  await expect(page.locator('slab-breadcrumb')).toMatchAriaSnapshot(`
    - navigation "Label"
  `);
});
