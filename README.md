# react-frontend
Simple React Web Application Template

- **Master Branch** -- contains the frontend react boiler template
- **Development Branch** -- contains the frontend code

# Guide on Webpack

## ConfigFiles
- `tsconfig.json`: config for type checking (Note that we will be using babel for code transpilation although we can do it here too)
- `.babelrc`: config for code transpilation
- `wepack.config.js`: config for webpack to bundle javascript files
- `.eslintrc`: config for lint
- `package.json`: npm dependency manager

## Babel & Webpack Related
- `@babel/core` - transforms es6 code to es5
- `@babel/plugin-transform-runtime` and `@babel/runtime` - plugins to allow us to use `aysnc` and `await` Javascript features
- `babel-loader` - webpack helper to transpile code, given the preset
    - `@babel/preset-env` - preset which helps babel to transform es6, es7, es8 code to es5
    - `@babel/preset-react` - preset which transform jsx to javascript (es5)
    - `@babel/preset-typescript` - enables Babel to transform Typescript code into Javascript
- `css-loader` - load and bundle css into one file
- `style-loader` - add all the styles inside the style tag to the document

**Plugins**
- `react-hot-loader` - works with webpack dev server hot module replacement (HMR). Tells dev server how to hot reload react codes
    - Note: can safely install react-hot-loader as a regular dependency instead of a dev dependency as it automatically ensures it is not executed in production and the footprint is minimal

## Eslint
- `eslint` - core Eslint library
- `eslint-plugin-react` - contains standard linting rules for React code
- `eslint-plugin-react-hooks` - contains linting rules for React hooks code
- `eslint-config-airbnb` - contains linting rules by airbnb
- `prettier` - core prettier library
- `eslint-config-prettier` - turns off all rules that are unnecessary or might conflict with Prettier 
- `eslint-plugin-prettier` - runs prettier as an eslint rule
- `@typescript-eslint/parser` - allows typescript code to be linted
- `@typescript-eslint/eslint-plugin` - contains standard linting rules for Typescript code

# References
- [creating react and typescript apps with webpack](https://www.carlrippon.com/creating-react-and-typescript-apps-with-webpack/)
- [redux with typescript](https://medium.com/@ksholla20/react-redux-with-typescript-ad7266896a9b)
- Eslint
    - [Using Eslint and Prettier in Typescript project](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)
    - [Using Airbnb Eslint config when moving to typescript](https://medium.com/@myylow/how-to-keep-the-airbnb-eslint-config-when-moving-to-typescript-1abb26adb5c6)
- https://www.smashingmagazine.com/2020/05/typescript-modern-react-projects-webpack-babel/

# Learning Materials
- [React Typescript Tutorial](https://www.youtube.com/watch?v=Z5iWr6Srsj8)