module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    // tell Jest to handle `*.vue` files
    'vue'
  ],
  transform: {
    // process `*.vue` files with `vue-jest`
    '.*\\.(vue)$': 'vue-jest',
    '.*\\.(js)$': 'babel-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**']
}
