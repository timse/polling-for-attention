var path = require('path');

module.exports = {
    entry: {
        pfa: './index.js'
    },
    output: {
        path: __dirname,
        filename: "[name].js",
        library: "pfa",
        libraryTarget: "umd"
    },
    module: {
        loaders: [
            {
                test: /.*\.js$/,
                loader: 'babel'
            }
        ]
    }
};
