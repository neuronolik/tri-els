import { html } from 'lit';
import { expect, test } from './playwright/test.js';
import type Form from './form.js';

test(
  'is accessible',
  { tag: '@accessibility' },
  async ({ renderTemplate, page }) => {
    await renderTemplate(
      () =>
        html`<slab-form label="Label">
          <slab-text-field label="Label"></slab-text-field>
          <button>Submit</button>
        </slab-form>`,
    );

    await expect(page).toBeAccessible('slab-form');
  },
);

test('label', { tag: '@accessibility' }, async ({ page }) => {
  await page.goto('?id=form--form');
  await page.locator('slab-form').waitFor();

  await expect(page.locator('slab-form')).toMatchAriaSnapshot(`
    - form "Label":
      - textbox "Name"
      - checkbox "Subscribe"
      - switch "Notifications"
      - button "Submit"
      - button "Reset"
  `);
});

test('label=${undefined}', { tag: '@accessibility' }, async ({ page }) => {
  await page.goto('?id=form--form');

  await page.locator('slab-form').evaluate<void, void, Form>((element) => {
    element.label = undefined;
  });

  // Unnamed, a form isn't a landmark.
  await expect(page.locator('slab-form')).toMatchAriaSnapshot(`
    - textbox "Name"
    - checkbox "Subscribe"
    - switch "Notifications"
    - button "Submit"
    - button "Reset"
  `);
});
