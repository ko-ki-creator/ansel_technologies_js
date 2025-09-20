module.exports = {
    root: true,
    ignorePatterns: ['node_modules', '.next'],
    extends: ['next', 'prettier'],
    ecmaVersion,
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'no-console': 'warn',
        'no-unused-vars': 'warn',
        'react/react-in-jsx-scope': 'off',
    },
};