import stylelint from 'stylelint';
import { expect, test } from '../../playwright/test.js';

const config = {
  plugins: ['../plugin.js'],
  rules: {
    'slab/no-private-selectors': true,
  },
};

const lint = async (code: string) => {
  const { results } = await stylelint.lint({
    code,
    cwd: import.meta.dirname.replace('src', 'dist'),
    config,
  });

  return results.at(0)?.warnings;
};

for (const selector of [
  ':host',
  ':host(:state(open))::after',
  ':host([orientation="vertical"])',
  ':host(:not(:state(selected)))',
  "[part~='listbox']",
  "[part~='listbox']:hover",
  "[part~='listbox']::before",
  "[part~='a'][part~='b']",
  ":host(:state(placeholder)) [part~='value']",
  "::slotted([role='tab'])",
  ":host([orientation='vertical']) ::slotted([role='tab']:state(selected))",
]) {
  test(
    `valid when the selector is \`${selector}\``,
    { tag: '@stylelint' },
    async () => {
      expect(await lint(`${selector} { color: black; }`)).toHaveLength(0);
    },
  );
}

for (const selector of [
  '.component',
  '#component',
  'span',
  '*',
  ':host .value',
  ':host > [part~="value"]',
  "[part~='a'] [part~='b']",
  "[part~='a']:first-child",
  "[part='value']",
  "[part~='value'][data-open]",
  ':host ::slotted(span) [part~="value"]',
  ':host, .component',
]) {
  test(
    `invalid when the selector is \`${selector}\``,
    { tag: '@stylelint' },
    async () => {
      expect(await lint(`${selector} { color: black; }`)).toHaveLength(1);
    },
  );
}

test(
  'valid when a nested selector resolves to one a consumer can write',
  { tag: '@stylelint' },
  async () => {
    expect(
      await lint(`
        [part~='value'] {
          color: black;

          &:hover {
            color: gray;
          }

          @media (prefers-reduced-motion: no-preference) {
            transition: color 1s;
          }
        }
      `),
    ).toHaveLength(0);
  },
);

test(
  'invalid when a nested selector resolves to one a consumer can not write',
  { tag: '@stylelint' },
  async () => {
    expect(
      await lint(`
        :host {
          .value {
            color: black;
          }
        }
      `),
    ).toHaveLength(1);
  },
);

test('ignores keyframes', { tag: '@stylelint' }, async () => {
  expect(
    await lint(`
      @keyframes spin {
        from {
          rotate: 0deg;
        }

        to {
          rotate: 360deg;
        }
      }
    `),
  ).toHaveLength(0);
});
