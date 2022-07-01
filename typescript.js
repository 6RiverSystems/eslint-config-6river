'use strict';

module.exports = {
	parser: '@typescript-eslint/parser',
	extends: ['6river', 'plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
	plugins: ['@typescript-eslint', '6river'],
	rules: {
		'@typescript-eslint/ban-types': ['error', { extendDefaults: true, types: { object: false } }],
		'@typescript-eslint/no-explicit-any': ['off'],
		'@typescript-eslint/no-floating-promises': 'error',
		'@typescript-eslint/no-namespace': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/triple-slash-reference': 'error',
		'@typescript-eslint/type-annotation-spacing': 'error',
		'6river/new-cap': ['error', { capIsNewExceptionPattern: '^@' }],
		'new-cap': 'off',
		'no-cond-assign': [2, 'always'],
		'no-undef': 'off',
		'no-unused-vars': 'off',
		'valid-jsdoc': 'off',
		'no-invalid-this': 'off',
	},
	parserOptions: {
		ecmaVersion: 11,
		sourceType: 'module',
	},
};
