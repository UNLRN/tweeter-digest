const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

module.exports = app => {
  // Parse cookies
  app.use(cookieParser());

  // Parse the body of POST requests
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
};
