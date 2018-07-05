'use strict';

const config = {
	'extends': 'google',
	'plugins': [
		'mocha'
	],
	'rules': {
		'max-len': ['error', 120, 2],
		'prefer-const': ['error'],
		'indent': ['error', 'tab', {
			'MemberExpression': 0
		}],
		'no-tabs': 'off',
		'dot-location': ['error', 'property'],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-console': ['error'],
		'no-undef': ['error'],
		'no-var': ['error'],
		'strict': ['error', 'global'],
		'object-shorthand': 'error',
		'no-await-in-loop': 'error',
		'eqeqeq': 'error',
		'require-jsdoc': 'off',
		'mocha/no-exclusive-tests': 'error',
		'space-in-parens': ['error', 'never'],
		'arrow-spacing': 'error',
		'arrow-parens': 'error'
	},
	'env': {
		'node': true,
		'es6': true,
		'mocha': true,
	},
	'parserOptions': {
		'ecmaVersion': 6,
		'ecmaFeatures': {
		}
	}
};

module.exports = config;

