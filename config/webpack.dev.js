const { HotModuleReplacementPlugin } = require("webpack");
const { merge } = require("webpack-merge");
const app = require('./wp-config-app');
const util = require('./wp-config-util');

const buildDevelopmentConfig = baseConfig => {
    const devServerPort = app.devServer.port;
    const devServerProxyDetails = app.devServer.proxy;
    const devServerProxy = {};
    const devServerPublicPath = app.devServer.publicPath;
    console.log(devServerPublicPath);

    /*
    devServerProxy[app.devServer.contextPath + devServerProxyDetails.url] = {
        target: devServerProxyDetails.target,
        secure: devServerProxyDetails.secure,
        prependPath: devServerProxyDetails.prependPath
    };*/

    return merge([
        baseConfig,
        {
            mode: "development",
            resolve: {
                symlinks: false // for yarn link to work
            },
            output: {
                devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]'
            },
            devServer: {
                historyApiFallback: true,
                stats: 'errors-only',
                // turn on hot module replacement (HMR)
                hot: true,
                hotOnly: false,
                port: devServerPort,
                //proxy: devServerProxy,
                //publicPath: devServerPublicPath,
                overlay: {
                    errors: true,
                    warnings: true
                }
            },
            optimization: {
                namedModules: true
            },
            plugins: [new HotModuleReplacementPlugin()]
        },
        util.generateSourceMap({ type: 'cheap-module-source-map' }),
        util.loadCSS(false)
    ]);
};

module.exports = buildDevelopmentConfig;