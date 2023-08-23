module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  "transform": {
  "^.+\\.js$": "babel-jest"
},
moduleNameMapper: {
    "\\.(jpg|png|svg)$": "../mocks/dummyLogo.js",
  },

};
