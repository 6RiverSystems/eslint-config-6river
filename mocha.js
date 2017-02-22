'use strict';

module.exports = {
	'extends': '6river',
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
