module.exports = {
  extends: [
    'plugin:@shopify/esnext',
    'plugin:@shopify/react',
    'plugin:@shopify/prettier',
  ],
  ignorePatterns: ['node_modules/'],
  rules: {
    'react/prop-types': 'off',
  },
};
