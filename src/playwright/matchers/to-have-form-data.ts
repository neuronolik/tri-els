import { type Locator, expect } from '@playwright/test';

export default expect.extend({
  /**
   * Asserts that a form has the given data. Pass an array to assert against
   * every entry under that name, the way a group of checkboxes submits.
   */
  async toHaveFormData(locator: Locator, name: string, value: unknown) {
    const isEvery = Array.isArray(value);

    const result = await locator.evaluate(
      (node, { name, isEvery }) => {
        if (!(node instanceof HTMLFormElement)) {
          return { tagName: node.tagName, value: null };
        }

        const data = new FormData(node);

        return {
          tagName: node.tagName,
          value: isEvery ? data.getAll(name) : data.get(name),
        };
      },
      { name, isEvery },
    );

    const isMatch =
      result.tagName === 'FORM' &&
      (isEvery
        ? Array.isArray(result.value) &&
          result.value.length === value.length &&
          result.value.every((entry, index) => entry === value[index])
        : result.value === value);

    const message =
      isMatch || result.tagName !== 'FORM'
        ? result.tagName === 'FORM'
          ? () => ''
          : () =>
              this.utils.matcherHint('toHaveFormData', result.value, value) +
              '\n\n' +
              // Locators have a `toString()` implementation that serializes nicely.
              //
              `Locator: ${locator.toString()}\n` +
              `Expected: ${this.utils.printExpected('FORM')}\n` +
              `Received: ${this.utils.printReceived(result.tagName)}`
        : () =>
            this.utils.matcherHint('toHaveFormData', result.value, value) +
            '\n\n' +
            // Locators have a `toString()` implementation that serializes nicely.
            //
            `Locator: ${locator.toString()}\n` +
            `Expected: ${this.utils.printExpected(value)}\n` +
            `Received: ${this.utils.printReceived(result.value)}`;

    return {
      actual: result.tagName === 'FORM' ? result.value : result.tagName,
      expected: result.tagName === 'FORM' ? value : result.tagName,
      message,
      name: 'toHaveFormData',
      pass: isMatch,
    };
  },
});
