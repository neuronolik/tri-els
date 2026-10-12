import { expect, test } from '../playwright/test.js';
import { viteUrl } from '../playwright/constants.js';

// `required` reports by throwing from `hostUpdate()`, which surfaces as an
// unhandled rejection. The element under test and the collector live in
// `src/playwright/elements`, because a Playwright test runs in Node.js while
// these have to run in the browser.

test(
  'throws when a required attribute is missing',
  { tag: '@miscellaneous' },
  async ({ page }) => {
    await page.goto(viteUrl);

    const messages = await page.evaluate(async () => {
      // In variables rather than written inline: TypeScript resolves a literal
      // specifier as a module, and these are paths the dev server serves
      // rather than ones TypeScript can resolve.
      const elementPath = '/src/playwright/elements/required.ts';
      const errorsPath = '/src/playwright/elements/errors.ts';

      await import(elementPath);

      const { default: collectErrors } = (await import(errorsPath)) as {
        default: (callback: () => unknown) => Promise<string[]>;
      };

      return collectErrors(() => {
        document.body.innerHTML =
          '<test-with-required-property></test-with-required-property>';
      });
    });

    expect(messages).toStrictEqual([
      'Expected WithRequiredProperty to have a `label` property.',
    ]);
  },
);

test(
  'does not throw when a required attribute is not missing',
  { tag: '@miscellaneous' },
  async ({ page }) => {
    await page.goto(viteUrl);

    const messages = await page.evaluate(async () => {
      // In variables rather than written inline: TypeScript resolves a literal
      // specifier as a module, and these are paths the dev server serves
      // rather than ones TypeScript can resolve.
      const elementPath = '/src/playwright/elements/required.ts';
      const errorsPath = '/src/playwright/elements/errors.ts';

      await import(elementPath);

      const { default: collectErrors } = (await import(errorsPath)) as {
        default: (callback: () => unknown) => Promise<string[]>;
      };

      return collectErrors(() => {
        document.body.innerHTML =
          '<test-with-required-property label="Label"></test-with-required-property>';
      });
    });

    expect(messages).toStrictEqual([]);
  },
);
