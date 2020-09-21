const { merge } = require("webpack-merge");
const app = require('./wp-config-app');
const util = require('./wp-config-util');

const buildProductionConfig = baseConfig => {
    return merge([
        baseConfig,
        {
            mode: "production"
        },
        util.clean(app.paths.build),
        util.minifyJS(),
        util.minifyCSS(),
        util.generateSourceMap({ type: 'source-map' }),
        util.loadCSS(true)
    ]);
};

module.exports = buildProductionConfig;