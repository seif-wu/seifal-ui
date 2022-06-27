import * as Webpack from 'webpack';

const path = require('path');

const webpackOptions: Webpack.Configuration = {
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@': path.join(__dirname, '../', 'src'),
    },
  },
  entry: {
    index: ['./src/index.ts'],
  },
  output: {
    filename: 'system.min.js',
    path: path.join(__dirname, '../dist'),
    library: 'SeifalUI',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
};

export default webpackOptions;
