import * as Webpack from "webpack";
import HtmlPlugin from "html-webpack-plugin";

const path = require("path");

interface WebpackDevServerOptions {
  devServer: {
    static: Record<string, string>;
    host: string;
    port: number;
  };
}

const webpackOptions: Webpack.Configuration & WebpackDevServerOptions = {
  mode: 'development',
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      "@": path.join(__dirname, "../", "src"),
    },
  },
  output: {
    publicPath: "/",
  },
  devtool: "source-map",
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
  ],
  devServer: {
    static: {
       directory:'./'
    },
    host: "localhost",
    port: 9000,
  },
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
