"use strict";

const webpack = require('webpack');

module.exports = {
    entry: {
        app:"./client/app/app.tsx",
        lib: ["react","react-dom","redux","redux-thunk","react-redux","react-router","axios","iscroll/build/iscroll-probe","qs","react-iscroll"]
    },
    output: {
        filename: "./dist/scripts/bundle.js",
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "babel?presets[]=es2015!ts" },
            { test: /\.scss$/, loader: "style!css!sass" },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "lib",
            filename: "./dist/scripts/lib.js"
        })
    ]
};