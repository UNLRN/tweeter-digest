const passport = require('passport');
const router = require('express').Router();

router.get('/', main);

router.get('/callback', ...callbacks);

module.exports = app => {
  app.get('/login/twitter', passport.authenticate('twitter'));
};
