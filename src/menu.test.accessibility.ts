import { html } from 'lit';
import { expect, test } from './playwright/test.js';
import type Menu from './menu.js';

test(
  'is accessible',
  { tag: '@accessibility' },
  async ({ renderTemplate, page }) => {
    await renderTemplate(
      () => html`
        <slab-menu label="Label">
          <button slot="anchor">Anchor</button>
          <slab-menu-item>One</slab-menu-item>
          <slab-menu-item disabled>Two</slab-menu-item>
        </slab-menu>
      `,
    );

    await expect(page).toBeAccessible('slab-menu');
  },
);

test(
  'is accessible when open',
  { tag: '@accessibility' },
  async ({ renderTemplate, page }) => {
    await renderTemplate(
      () => html`
        <slab-menu label="Label" open>
          <button slot="anchor">Anchor</button>
          <slab-menu-item>One</slab-menu-item>
          <slab-menu-item disabled>Two</slab-menu-item>
          <slab-menu-item label="Label">Three</slab-menu-item>
        </slab-menu>
      `,
    );

    await expect(page).toBeAccessible('slab-menu');
  },
);

test('has an anchor', { tag: '@accessibility' }, async ({ page }) => {
  await page.goto('?id=menu--menu');

  await expect(page.locator('slab-menu')).toMatchAriaSnapshot(`
    - button "Anchor"
  `);
});

test('open', { tag: '@accessibility' }, async ({ page }) => {
  await page.goto('?id=menu--menu');

  await page.locator('slab-menu').evaluate<void, void, Menu>((element) => {
    element.open = true;
  });

  await expect(page.locator('slab-menu')).toMatchAriaSnapshot(`
    - button "Anchor" [expanded]
    - menu "Label":
      - menuitem "One"
      - menuitem "Two"
      - menuitem "Three"
  `);
});
