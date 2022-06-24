import * as Webpack from "webpack";
import HtmlPlugin from "html-webpack-plugin";

const path = require("path");


const webpackOptions: Webpack.Configuration = {
  mode: 'development',
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      "@": path.join(__dirname, "../", "src"),
    },
  },
  entry: {
    index: ['./src/components/index.ts']
  },  
  output: {
    filename: 'seifal-ui.min.js' ,
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
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
};

export default webpackOptions;
