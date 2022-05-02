module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential', // 识别vue的变量 如'Page'
    '@vue/typescript/recommended',
    'prettier',
    '@vue/prettier'
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaVersion: 2017
  },
  rules: {
    // 禁止使用 var
    'no-var': 'error',
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': ['error']
  },
  overrides: [
    // {
    //   files: [
    //     '**/__tests__/*.{j,t}s?(x)',
    //     '**/tests/unit/**/*.spec.{j,t}s?(x)'
    //   ],
    //   env: {
    //     mocha: true
    //   }
    // },
  ],
  globals: {
    defineProps: 'readonly'
  }
}
