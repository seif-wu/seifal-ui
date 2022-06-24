"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
var path = require("path");
var webpackOptions = {
    mode: 'development',
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        alias: {
            "@": path.join(__dirname, "../", "src")
        }
    },
    output: {
        publicPath: "/"
    },
    devtool: "source-map",
    plugins: [
        new html_webpack_plugin_1["default"]({
            template: "./index.html"
        }),
    ],
    devServer: {
        static: {
            directory: './'
        },
        host: "localhost",
        port: 9000
    },
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
