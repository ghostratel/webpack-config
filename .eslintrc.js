module.exports = {
    "root": true,
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
        'DEV': true
    },
    "parserOptions": {
        "sourceType": "module",
        "allowImportExportEverywhere": true
    },
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ],
        'no-console': 'off',
        'no-debugger': 'off',
        "space-in-parens": ["error", "never"]
    },
    "overrides": [
        {
            "files": ["*.ts", "*.tsx"],
            "parser": "@typescript-eslint/parser",
            "extends": [
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended'
            ],
            "plugins": [
                "@typescript-eslint"
            ],
        },
        {
            "files": ["*.js", "*.jsx"],
            "parser": "babel-eslint",
            "extends": [
                'eslint:recommended'
            ]
        }
    ]
}
