# eslint-config-6river

1. `npm i -D eslint-config-6river`
2. Add oen of the following to `.eslintrc.json`:
  - TypeScript: `{"extends": "6river/typescript"}`
  - JavaScript: `{"extends": "6river"}`
  - mixed: `{"extends": "6river/typescript"}`
  - Mocha tests: `{"extends": "6river/mocha"}`
  - AngularJS: `{"extends": "6river/angular"}`
3. Add one of the following to the `scripts` property in `package.json`:
	- TypeScript: `"lint": "eslint --ext .ts ."`
	- JavaScript: `"lint": "eslint --ext .js ."`
	- mixed: `"lint": "eslint --ext .js,ts ."`
4. `npm run lint`
