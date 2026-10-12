import { html } from 'lit';
import { expect, test } from './playwright/test.js';
import type Accordion from './accordion.js';

test(
  'is accessible',
  { tag: '@accessibility' },
  async ({ renderTemplate, page }) => {
    await renderTemplate(
      () =>
        html`<slab-accordion exclusive>
          <slab-disclosure label="One" open>One</slab-disclosure>
          <slab-disclosure label="Two">Two</slab-disclosure>
        </slab-accordion>`,
    );

    await expect(page).toBeAccessible('slab-accordion');
  },
);

test('exclusive=${true}', { tag: '@accessibility' }, async ({ page }) => {
  await page.goto('?id=accordion--accordion');

  await page
    .locator('slab-accordion')
    .evaluate<void, void, Accordion>((element) => {
      element.exclusive = true;
    });

  await page.locator('summary').first().click();
  await page.locator('summary').last().click();

  // Accordion adds no role of its own. It's its Disclosures, and a `<summary>`
  // reads as text to Playwright's tree, as in Disclosure's snapshots.
  await expect(page.locator('slab-accordion')).toMatchAriaSnapshot(`
    - group: One
    - group: Two
    - group: Three Three
  `);
});

test('exclusive=${false}', { tag: '@accessibility' }, async ({ page }) => {
  await page.goto('?id=accordion--accordion');

  await page.locator('summary').first().click();
  await page.locator('summary').last().click();

  await expect(page.locator('slab-accordion')).toMatchAriaSnapshot(`
    - group: One One
    - group: Two
    - group: Three Three
  `);
});
