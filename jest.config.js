module.exports = {
  transform: {
    '^.+\\.(jsx|js)?$': `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `<rootDir>/__mocks__/style-mock.js`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `cypress`, `__tests__/util`],
  transformIgnorePatterns: ['node_modules/(?!(gatsby|gatsby-plugin-mdx)/)'],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  coverageReporters: ['json-summary', 'text', 'lcov'],
}
