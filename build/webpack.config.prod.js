"use strict";
exports.__esModule = true;
var path = require("path");
var webpackOptions = {
    mode: 'development',
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        alias: {
            "@": path.join(__dirname, "../", "src")
        }
    },
    entry: {
        index: ['./src/components/index.ts']
    },
    output: {
        filename: 'seifal-ui.min.js',
        path: path.join(__dirname, '../dist'),
        library: 'SeifalUI',
        libraryTarget: 'umd'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    },
                ]
            },
        ]
    }
};
exports["default"] = webpackOptions;
