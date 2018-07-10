const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

const baseConfig = require('./webpack.base.config');

const devConfig = function () {
  return {
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, '../src'),
      historyApiFallback: true,
      hot: true,
      open: true,
      overlay: true,
    },
    mode: 'development',
    // Proxy for API
    // proxy: {
    //   '^/api/*': {
    //     target: 'http://localhost:8080/api/',
    //     secure: false,
    //   },
    // },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new ErrorOverlayPlugin(),
    ],
  };
};

module.exports = merge.smart(baseConfig, devConfig);
