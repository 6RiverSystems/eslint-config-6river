'use strict';

module.exports = {
	'parser': 'typescript-eslint-parser',
	'extends': '6river',
	'plugins': [
		'typescript'
	],
	'rules': {
		'no-undef': 'off',
		"no-unused-vars": "off",
		"typescript/no-unused-vars": "error",
		'typescript/no-triple-slash-reference': 'error'
	},
	'parserOptions': {
		'ecmaVersion': 6,
		'sourceType': 'module'
	},
	'parser': 'typescript-eslint-parser'
};
