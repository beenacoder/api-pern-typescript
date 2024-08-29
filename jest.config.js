// /** @type {import('ts-jest').JestConfigWithTsJest} **/
// export default {
//   testEnvironment: "node",
//   transform: {
//     "^.+.tsx?$": ["ts-jest",{}],
//   },
//   // transform: {},
// };


// /** @type {import('ts-jest').JestConfigWithTsJest} **/
// export default {
//   testEnvironment: 'node',
//   preset: 'ts-jest',
//   moduleNameMapper: {
//     '^@src/(.*)$': '<rootDir>/src/$1',
//   },
//   transform: {
//     '\\.[jt]sx?$': 'babel-jest',
//   },
//   transformIgnorePatterns: ['<rootDir>/node_modules/'],
//   extensionsToTreatAsEsm: ['.ts'],
// };



/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: 'node',
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
  transform: {

  },
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],


  extensionsToTreatAsEsm: ['.ts'],
};

// export default {
//   transform: {},
//   extensionsToTreatAsEsm: ['.ts'],
//   globals: {
//     'ts-jest': {
//       useESM: true,
//     },
//   },
// };