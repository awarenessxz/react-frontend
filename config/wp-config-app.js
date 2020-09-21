const path = require('path');

// contains configuration required for webpack to run
module.exports = {
    title: 'React Frontend',
    paths: {
        // various sources and build paths
        src: path.join(__dirname, '../src'), // source path
        build: path.join(__dirname, '../build') // dist or build output path
    },
    devServer: {
        // rapid development related / setting for webpack dev server (link between webpack and embedded tomcat in springboot)
        port: 8080,
        contextPath: '/frontend',
        proxy: {
            url: '/rest/*', // path to redirect request to all external api e.g. restful api call
            target: 'http://localhost:9090/', // path of the targeted external server that house the external api
            secure: false,
            prependPath: false,
        },
        publicPath: 'http://0.0.0.0:8080/frontend'
    }
};