'use strict';

module.exports = {
	'parser': '@typescript-eslint/parser',
	'extends': [
		'6river',
		'plugin:import/typescript',
	],
	'plugins': [
		'@typescript-eslint',
		'6river',
	],
	'rules': {
		'no-undef': 'off',
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "error",
		'@typescript-eslint/triple-slash-reference': 'error',
		'new-cap': 'off',
		'6river/new-cap': [
			'error', {
				'capIsNewExceptionPattern': '^@'
			}

		],
		"valid-jsdoc": "off",
		"@typescript-eslint/type-annotation-spacing": "error",
		"@typescript-eslint/no-floating-promises": "error"
	},
	'parserOptions': {
		'ecmaVersion': 2019,
		'project': "tsconfig.json",
		'sourceType': 'module'
	},
	'settings': {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx']
		},
		'import/resolver': {
			'typescript': {
				'alwaysTryTypes': true
			},
			'node': {
				'extensions': ['.js','.jsx','.ts','tsx']
			}
		}
	}
};
