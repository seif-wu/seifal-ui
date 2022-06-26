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
    filename: 'ui.min.js',
    path: path.join(__dirname, '../dist'),
    library: 'SeifalUI',
    libraryTarget: 'umd',
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
