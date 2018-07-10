const addCompression = require('./compression');
const addCors = require('./cors');
const logging = require('./logging');
const addParser = require('./parser');
const addPassport = require('./passport');
const addSecurity = require('./security');
const addSession = require('./session');

const DEV = process.env.NODE_ENV !== 'production';

module.exports = app => {
  if (DEV) {
    app.use(logging);
  }

  addSecurity(app);
  addCors(app);
  addParser(app);
  addSession(app);
  addPassport(app);
  addCompression(app);
};
