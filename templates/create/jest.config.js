module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/mocks/style-mock.js',
    '\\.(css|less)$': '<rootDir>/tests/mocks/style-mock.js',
    '^Routes(.*)$': '<rootDir>/src/routes$1',
    '^Components(.*)$': '<rootDir>/src/components$1',
    '^Services(.*)$': '<rootDir>/src/services$1',
    '^Assets(.*)$': '<rootDir>/src/assets$1',
  },
};
