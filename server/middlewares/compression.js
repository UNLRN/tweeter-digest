const compression = require('compression');

module.exports = app => {
  // Compress assets in production
  app.use(compression());
};
