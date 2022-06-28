/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const assert = require('assert');

const { ESLint } = require('eslint');

const conf = require('../');

const repoFiles = ['index.js', 'mocha.js', 'typescript.js', 'angular.js', 'test/test.js'];
const eslintOpts = {
	useEslintrc: false,
	overrideConfig: {
		env: {
			node: true,
			mocha: true,
		},
		plugins: ['import', 'mocha'],
		parserOptions: { ecmaVersion: 'latest' },
		rules: conf.rules,
	},
};

async function main() {
	const eslint = new ESLint(eslintOpts);
	const formatter = await eslint.loadFormatter();
	const results = await eslint.lintFiles(repoFiles);
	const output = await formatter.format(results);

	console.log(output); //eslint-disable-line no-console

	results.forEach((result) => {
		assert.equal(
			result.errorCount,
			0,
			`Expected ${result.filePath} to have 0 errors but instead it has ${result.errorCount} error(s)`,
		);
		assert.equal(
			result.warningCount,
			0,
			`Expected ${result.filePath} to have 0 warnings but instead it has ${result.warningCount} warning(s)`,
		);
	});
}

void main();
