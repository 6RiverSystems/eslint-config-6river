'use strict';

module.exports = {
	'parser': 'typescript-eslint-parser',
	'extends': '6river',
	'plugins': [
		'typescript'
	],
	'rules': {
		'no-undef': [0],
	},
	'parserOptions': {
		'sourceType': 'module'
	},
};
