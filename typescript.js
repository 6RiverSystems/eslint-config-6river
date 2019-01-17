'use strict';

module.exports = {
	'parser': 'typescript-eslint-parser',
	'extends': '6river',
	'plugins': [
		'typescript',
		'6river'
	],
	'rules': {
		'no-undef': 'off',
		"no-unused-vars": "off",
		"typescript/no-unused-vars": "error",
		'typescript/no-triple-slash-reference': 'error',
		'new-cap': 'off',
		'6river/new-cap': [
			'error', {
				'capIsNewExceptionPattern': '^@'
			}
		],
		"valid-jsdoc": "off",
		"typescript/type-annotation-spacing": "error"
	},
	'parserOptions': {
		'ecmaVersion': 6,
		'sourceType': 'module'
	}
};
