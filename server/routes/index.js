const passport = require('passport');
const router = require('express').Router();

router.use('/login', passport.authenticate('twitter'));

module.exports = router;
