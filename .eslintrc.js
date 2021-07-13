module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-deprecated-slot-attribute': 'off',
    semi: [2, 'always'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'vue/script-indent': [
      'error',
      2,
      { baseIndent: 1 }
    ],
    'comma-dangle': ['error', 'never'],
    'space-before-function-paren': ['error', 'never'],
    "no-unused-vars": 'off'
  },
  overrides: [
    {
      files: [
        '*.vue',
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      rules: {
        indent: 'off'
      },
      env: {
        jest: true
      }
    }
  ]
};
