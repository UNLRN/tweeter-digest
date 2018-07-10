const hpp = require('hpp');
const helmet = require('helmet');

module.exports = app => {
  // Prevent HTTP Parameter pollution.
  app.use(hpp());

  // Set various HTTP headers to secure app.
  app.use(helmet());
  app.use(helmet.referrerPolicy());
};
