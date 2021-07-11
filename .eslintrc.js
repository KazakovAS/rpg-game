module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
      'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    "linebreak-style": "off", // Неправильно работает в Windows.
    "arrow-parens": "off", // Несовместимо с prettier
    "object-curly-newline": "off", // Несовместимо с prettier
    "no-mixed-operators": "off", // Несовместимо с prettier
    "no-console": "off", // airbnb использует предупреждение
    "no-alert": "error", // airbnb использует предупреждение
    "function-paren-newline": "off", // Несовместимо с prettier
    "no-plusplus": "off",
    "space-before-function-paren": 0, // Несовместимо с prettier
    "import/no-unresolved": "off",
    "max-len": ["error", { "ignoreUrls": true }],
    "operator-linebreak": [2, "after"],
    "no-return-assign": 0,
    "consistent-return": 0,
    'object-shorthand': 'off',
    'curly': 'off',
    'func-names': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'prefer-const': 'off',
    'no-unused-vars': 'off',
    'nonblock-statement-body-position': 'off',
  },
};
