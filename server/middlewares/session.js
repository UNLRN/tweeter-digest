const session = require('express-session');

const DEV = process.env.NODE_ENV !== 'production';
const ONE_YEAR = 31556952000;

if (!process.env.SESSION_COOKIE_SECRET) {
  throw new Error(
    '[server/middlewares/session] You have to provide the SESSION_COOKIE_SECRET environment variable.'
  );
}

module.exports = app => {
  app.use(session({
    secret: process.env.SESSION_COOKIE_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: ONE_YEAR,
      secure: !DEV,
    },
  }));
};
