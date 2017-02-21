'use strict';

module.exports = {
	'extends': './index.js',
	'plugins': [
		'mocha'
	],
	'rules': {
		'no-console': [1],
		'mocha/no-exclusive-tests': 'error',
	},
	env: {
		'mocha': true
	}
};
