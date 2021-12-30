module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended'],
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020, // 指定es版本
    sourceType: 'module' // 代码支持es6，使用module
  },
  rules: {
    camelcase: 'warn',
    indent: ['off', 2],
    'max-len': ['error', { code: 200 }],
    'no-var': 'error',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'vue/max-attributes-per-line': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/camelcase': ['off', { properties: 'always' }],
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // 运行时，用prettier缩进2行，但还是会提示Expected indentation of 2 spaces but found 4,暂无法解决，待排查
    '@typescript-eslint/indent': ['off', 2]
  }
}
