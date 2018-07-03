/* eslint-disable fp/no-nil */
// const DashboardPlugin = require('webpack-dashboard/plugin');
const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const compression = require('compression');

dotenv.config({ path: path.join(__dirname, 'config') });
const app = express();
const port = 3000;

// Remove Express header addition.
app.disable('x-powered-by');

// Compress assets in production
app.use(compression());

// Parse the body of POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup the public directory so that we can server static assets.
app.use(express.static(path.join(__dirname, 'public')));

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('../config/webpack.dev.config.js');

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  logLevel: 'warn',
  publicPath: config.output.publicPath,
}));

// Serve the files on port 3000.
app.listen(port, () => {
  console.log(`✅  server started on port: ${port}`); // eslint-disable-line no-console
});
