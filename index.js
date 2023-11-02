'use strict';

const config = {
	extends: ['google', 'prettier'],
	plugins: ['import', 'mocha'],
	rules: {
		// prettier owns most formatting rules now
		'max-len': ['warn', 120, 2],

		curly: ['error', 'all'],
		'prefer-const': ['error'],
		'no-console': ['error'],
		'no-fallthrough': ['error'],
		'no-undef': ['error'],
		'no-var': ['error'],
		strict: ['error', 'global'],
		'object-shorthand': 'error',
		'no-await-in-loop': 'error',
		eqeqeq: 'error',
		'require-jsdoc': 'off',
		'mocha/no-exclusive-tests': 'error',
		'import/order': [
			'error',
			{
				groups: [['builtin'], ['external'], ['internal', 'parent', 'sibling', 'index']],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
				},
			},
		],
		'import/no-self-import': 'error',
		'import/newline-after-import': 'error',
	},
	env: {
		node: true,
		mocha: true,
	},
	parserOptions: {
		ecmaVersion: 11,
	},
};

module.exports = config;
