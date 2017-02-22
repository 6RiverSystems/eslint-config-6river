'use strict';

module.exports = {
	'parser': 'typescript-eslint-parser',
	'extends': '6river',
	'plugins': [
		'typescript'
	],
	'rules': {
		'no-undef': 'off',
		'typescript/no-triple-slash-reference': 'error'
	},
	'parserOptions': {
		'sourceType': 'module'
	},
};
