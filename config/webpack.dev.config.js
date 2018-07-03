const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config');

const devConfig = function () {
  return {
    devtool: 'inline-source-map',
    mode: 'development',
  };
};

module.exports = merge.smart(baseConfig, devConfig);
