const path = require('path');
require('es6-promise').polyfill();
require('isomorphic-fetch'); // eslint-disable-line import/no-unassigned-import
require('dotenv').config({ path: path.resolve(__dirname, '../config/.env') }); // eslint-disable-line no-unused-vars
const http = require('http');
const debug = require('debug')('app');
const express = require('express');

const addMiddlewares = require('./middlewares');

const PORT = process.env.PORT || 3000;

const app = express();

addMiddlewares(app);

app.use(require('./routes'));

app.use((err, req, res, next) => {
  if (err) {
    console.error(err);
    res
      .status(500)
      .send('Oops, something went wrong');
  } else {
    return next();
  }
});

const server = http.createServer(app);

// Serve the files on process.env.port || 8080.
server.listen(PORT);

server.on('error', err => {
  console.error(err);
  throw new Error(err);
});

server.on('listening', () => {
  debug('🚀 started');
  debug(`Listening on port ${PORT}`);
});
