'use strict';

module.exports = {
	'parser': 'typescript-eslint-parser',
	'extends': '6river',
	'plugins': [
		'typescript'
	],
	'rules': {
		'no-undef': 'off',
		'no-unused-vars': 'off',
		'no-triple-slash-reference': 'error'
	},
	'parserOptions': {
		'sourceType': 'module'
	},
};
