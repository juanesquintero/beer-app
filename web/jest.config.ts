import type { Config } from 'jest';

const config: Config = {
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/$1",
    },
    verbose: true,
    testEnvironment: 'jsdom',
};
export default config;