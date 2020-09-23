// external plugins
const chalk = require('chalk');
const { merge } = require("webpack-merge");
const util = require('./config/wp-config-util');

// internal configuration
const commonConfig = require('./config/webpack.common');
const devConfig = require('./config/webpack.dev');
const prodConfig = require('./config/webpack.prod');

// final export
module.exports = env => {
    process.env.BABEL_ENV = env;
    console.info("Running Environment:", chalk.bold.red(env));
    const scriptType = process.env.npm_lifecycle_event;
    switch (scriptType) {
        case 'build':
            return prodConfig(commonConfig);
        case "start":
            return devConfig(commonConfig);
        case "stats":
            return merge([commonConfig, util.generateSourceMap({ type : "eval-source-map" })]);
        default:
            throw new Error("Invalid npm script!");
    }
};