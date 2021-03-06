const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

module.exports = {
    entry: "./src/app.js",
    target: 'node',
    output: {
        path: __dirname,
        filename: "./dist/app-bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.json$/,
            loader: 'json'
        }]
    },
    plugins: [
        // Replace `any-promise` with native Promise.
        new webpack.NormalModuleReplacementPlugin(/any-promise$/, path.join(__dirname, 'native/promise.js')),
    ]
};