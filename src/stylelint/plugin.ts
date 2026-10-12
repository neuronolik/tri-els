import stylelint from 'stylelint';
import noPrivateSelectors from './rules/no-private-selectors.js';
import noUnprefixedPrivateCustomPropertyName from './rules/no-unprefixed-private-custom-property.js';

export default [
  stylelint.createPlugin(noPrivateSelectors.ruleName, noPrivateSelectors),
  stylelint.createPlugin(
    noUnprefixedPrivateCustomPropertyName.ruleName,
    noUnprefixedPrivateCustomPropertyName,
  ),
];
