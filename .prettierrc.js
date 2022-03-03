module.exports = {
  ...require('prettier-airbnb-config'),
  printWidth: 160,
  proseWrap: 'always',
  trailingComma: 'all',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  singleQuote: true,
  tabWidth: 2,
  useTabs: true,
  importOrder: ['^react(.*)$', '<THIRD_PARTY_MODULES>', '^src[./]', '^[/]', '^[./]'],
  importOrderSeparation: true,
};
