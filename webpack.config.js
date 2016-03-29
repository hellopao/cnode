"use strict";

const path = require('path');
const webpack = require('webpack');

const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: "lib",
        filename: "./dist/scripts/lib.js"
    })
];

if (process.env.NODE_ENV === "prod") {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false
        })
    )
}

module.exports = {
    entry: {
        app: "./client/app/app.tsx",
        lib: ["react", "react-dom", "redux", "redux-thunk", "react-redux", "react-router", "axios", "iscroll/build/iscroll-probe", "qs", "react-iscroll"]
    },
    output: {
        filename: "./dist/scripts/bundle.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "babel?presets[]=es2015!ts" },
            { test: /\.scss$/, loader: "style!css!sass" },
            { test: /\.css$/, loader: "style!css" },
            { test: /.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192&name=[path][name].[ext]' }
        ]
    },
    plugins: plugins,
    alias: {
        'react': path.join(__dirname,"node_modules/react/dist/react.min")
    }
};