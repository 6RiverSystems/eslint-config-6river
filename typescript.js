'use strict';

module.exports = {
	'parser': '@typescript-eslint/parser',
	'extends': '6river',
	'plugins': [
		'@typescript-eslint',
		'6river'
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
		"@typescript-eslint/type-annotation-spacing": "error"
	},
	'parserOptions': {
		'ecmaVersion': 6,
		'sourceType': 'module'
	}
};
