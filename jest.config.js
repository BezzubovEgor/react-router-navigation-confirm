module.exports = {
    "roots": [
      "<rootDir>/src"
    ],
    "testEnvironment": "jsdom",
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__test__/__mocks__/fileMock.js",
      "\\.(css|less)$": "identity-obj-proxy"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
    "coverageReporters": [
      "json-summary",
      "text",
      "lcov",
      "clover"
    ],
  }
