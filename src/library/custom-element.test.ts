import { expect, test } from '../playwright/test.js';
import { viteUrl } from '../playwright/constants.js';

// `customElement` exists to tell two collisions apart: the same version of
// Slab registered twice, which is a duplicated bundle and harmless, and a
// different version or a different library under the same name, which isn't.
// Both need a registry that already holds the name, so both are set up in the
// browser rather than through a template.

test(
  'skips a tag the same version of Slab already registered',
  { tag: '@miscellaneous' },
  async ({ page }) => {
    await page.goto(viteUrl);

    const error = await page.evaluate(async () => {
      // In a variable rather than written inline: TypeScript resolves a
      // literal specifier as a module, and this is a path the dev server
      // serves rather than one TypeScript can resolve.
      const componentPath = '/src/checkbox.ts';
      const path = '/src/library/custom-element.ts';

      await import(componentPath);

      const { default: customElement } = (await import(path)) as {
        default: (name: string) => (constructor: unknown) => void;
      };

      try {
        customElement('slab-checkbox')(class extends HTMLElement {});
      } catch (error_: unknown) {
        return error_ instanceof Error ? error_.message : String(error_);
      }

      return null;
    });

    expect(error).toBeNull();
  },
);

test(
  'throws when something other than Slab holds the tag',
  { tag: '@miscellaneous' },
  async ({ page }) => {
    await page.goto(viteUrl);

    const error = await page.evaluate(async () => {
      // In a variable rather than written inline: TypeScript resolves a
      // literal specifier as a module, and this is a path the dev server
      // serves rather than one TypeScript can resolve.
      const path = '/src/library/custom-element.ts';

      const { default: customElement } = (await import(path)) as {
        default: (name: string) => (constructor: unknown) => void;
      };

      window.customElements.define(
        'slab-imposter',
        class extends HTMLElement {},
      );

      try {
        customElement('slab-imposter')(class extends HTMLElement {});
      } catch (error_: unknown) {
        return error_ instanceof Error ? error_.message : String(error_);
      }

      return null;
    });

    expect(error).toMatch(
      /^"slab-imposter" is already registered by something other than Slab, so Slab \S+ can't register it\./,
    );
  },
);

test(
  'throws when another version of Slab holds the tag',
  { tag: '@miscellaneous' },
  async ({ page }) => {
    await page.goto(viteUrl);

    const error = await page.evaluate(async () => {
      // In a variable rather than written inline: TypeScript resolves a
      // literal specifier as a module, and this is a path the dev server
      // serves rather than one TypeScript can resolve.
      const path = '/src/library/custom-element.ts';

      const { default: customElement } = (await import(path)) as {
        default: (name: string) => (constructor: unknown) => void;
      };

      class Older extends HTMLElement {}

      // What an older copy of Slab would have stamped on its own constructor.
      Object.defineProperty(Older, Symbol.for('slab-elements/version'), {
        value: '0.0.1-older',
      });

      window.customElements.define('slab-older', Older);

      try {
        customElement('slab-older')(class extends HTMLElement {});
      } catch (error_: unknown) {
        return error_ instanceof Error ? error_.message : String(error_);
      }

      return null;
    });

    expect(error).toMatch(
      /^"slab-older" is already registered by Slab 0\.0\.1-older, so Slab \S+ can't register it\./,
    );
  },
);
