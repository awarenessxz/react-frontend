const HtmlWebpackPlugin = require('html-webpack-plugin'); // generates an HTML file, injects the script inside the HTML file and writes this file to dist/index.html
const { merge } = require("webpack-merge");
const app = require('./wp-config-app');
const util = require('./wp-config-util');

// common webpack configuration (used by both development and production config)
module.exports = merge([
    {
        entry: {
            app: ['react-hot-loader/patch', app.paths.src]
        },
        resolve: {
            alias: {
                'react-dom': '@hot-loader/react-dom'
            },
            extensions: ['.js', '.jsx']
        },
        output: {
            path: app.paths.build,
            filename: '[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: app.title,
                template: `${app.paths.src}/index.html`,
                hash: true,
            })
        ],
    },
    util.loadJavascript({
        include: [app.paths.src],
        exclude: /node_modules/,
    }),
    util.lint({
        options: {
            emitWarning: true,
            failOnError: true,
        }
    })
]);