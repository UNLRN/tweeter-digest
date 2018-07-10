const debug = require('debug')('server:middlewares:logging');

module.exports = (req, res, next) => {
  debug(`requesting: ${req.url}`);
  next();
};
