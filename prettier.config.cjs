/** @type {import("prettier").Options} */
module.exports = {
  arrowParens: 'always',
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  // pnpm doesn't support plugin autoloading
  // https://github.com/tailwindlabs/prettier-plugin-tailwindcss#installation
  plugins: ['prettier-plugin-tailwindcss'],
}
