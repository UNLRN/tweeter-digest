const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const baseConfig = require('./webpack.base.config');

const prodConfig = function () {
  return {
    mode: 'production',
    plugin: [
      new CleanWebpackPlugin(['dist']),
    ],
  };
};
module.exports = merge.smart(baseConfig, prodConfig);
