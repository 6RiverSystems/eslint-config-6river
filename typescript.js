'use strict';

module.exports = {
	'parser': 'typescript-eslint-parser',
	'extends': './index.js',
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
