'use strict';

module.exports = {
	'extends': '6river',
	'plugins': [
		'mocha'
	],
	'rules': {
		'no-console': 'warn',
		'mocha/no-exclusive-tests': 'error',
	},
	env: {
		'mocha': true
	}
};
