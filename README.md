# react-frontend
Simple React Web Application Template

- **Master Branch** -- contains the frontend react boiler template
- **Development Branch** -- contains the frontend code

# Guide on Webpack

- @babel/core - transforms es6 code to es5
- babel-loader - webpack helper to transpile code, given the preset
    - @babel/preset-env - preset which helps babel to transform es6, es7, es8 code to es5
    - @babel/preset-react - preset which transform jsx to javascript (es5)
- css-loader - load and bundle css into one file
- style-loader - add all of the styles inside the style tag to the document

**Plugins**
- react-hot-loader - works with webpack dev server hot module replacement (HMR). Tells dev server how to hot reload react codes
    - Note: can safely install react-hot-loader as a regular dependency instead of a dev dependency as it automatically ensures it is not executed in production and the footprint is minimal
    
    