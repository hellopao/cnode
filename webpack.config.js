"use strict";

const webpack = require('webpack');

module.exports = {
    entry: "./client/app/app.tsx",
    output: {
        filename: "./dist/scripts/bundle.js",
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts" },
            { test: /\.scss$/, loader: "style!css!sass" },
            { test: /\.css$/, loader: "style!css" }
        ],
        devtool: "source-map"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false
        })
    ]
};