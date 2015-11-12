"use strict";

const webpack = require('webpack');

module.exports = {
	entry: {
        index: "./client/index.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: "./dist/client/"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['react']
                }
            }
        ]
    }
}