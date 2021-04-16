"use strict";

module.exports = {
	parser: "@typescript-eslint/parser",
	extends: [
		"6river",
		"plugin:@typescript-eslint/recommended",
		"plugin:import/typescript",
	],
	plugins: ["@typescript-eslint", "6river"],
	rules: {
		"@typescript-eslint/no-floating-promises": "error",
		"@typescript-eslint/no-unused-vars": "error",
		"@typescript-eslint/triple-slash-reference": "error",
		"@typescript-eslint/type-annotation-spacing": "error",
		"@typescript-eslint/no-explicit-any": ["error", { ignoreRestArgs: true }],
		"6river/new-cap": ["error", { capIsNewExceptionPattern: "^@" }],
		"new-cap": "off",
		"no-undef": "off",
		"no-unused-vars": "off",
		"valid-jsdoc": "off",
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
	},
};
