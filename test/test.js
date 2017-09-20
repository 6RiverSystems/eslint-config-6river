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
const eslint = require('eslint');
const conf = require('../');

// The source files to lint.
const repoFiles = [
	'index.js',
	'mocha.js',
	'typescript.js',
	'angular.js',
	'test/test.js',
];

// Use the rules defined in this repo to test against.
const eslintOpts = {
	useEslintrc: false,
	envs: ['node', 'es6', 'mocha'],
	'plugins': ['mocha'],
	parserOptions: {ecmaVersion: 6},
	rules: conf.rules,
};

// Runs the linter on the repo files and asserts no errors were found.
const cli = new eslint.CLIEngine(eslintOpts);
const formatter = cli.getFormatter();
const report = cli.executeOnFiles(repoFiles);

const output = formatter(report.results);
console.log(output); //eslint-disable-line no-console

assert.equal(report.errorCount, 0);
assert.equal(report.warningCount, 0);
repoFiles.forEach((file, index) => {
	assert(report.results[index].filePath.endsWith(file));
});
