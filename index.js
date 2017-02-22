'use strict';

const config = {
	'extends': 'google',
	'rules': {
		'max-len': ['error', 120, 2],
		'prefer-const': ['error'],
		'indent': ['error', 'tab'],
		'dot-location': ['error', 'property'],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-console': ['error'],
		'no-undef': ['error'],
		'no-var': ['error'],
		'strict': ['error', 'global'],
		'eqeqeq': 'error',
		'require-jsdoc': 'off'
	},
	'env': {
		'node': true,
		'es6': true,
	},
	'ecmaFeatures': {
		'modules': true,
		'classes': true,
		'arrowFunctions': true,
		'blockBindings': true,
		'templateStrings': true
	}
};

module.exports = config;
