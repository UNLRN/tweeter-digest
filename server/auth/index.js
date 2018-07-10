const passport = require('passport');
const twitter = require('./twitter');

const DEV = process.env.NODE_ENV !== 'production';

const TWITTER_CALLBACK_URL = DEV ? 'http://localhost:3000/auth/twitter/callback' : 'https://myfuturewebsite.cool/auth/twitter/callback';
const TWITTER_CONSUMER_KEY = DEV ? process.env.TWITTER_CONSUMER_KEY_DEV : process.env.TWITTER_CONSUMER_KEY;
const TWITTER_CONSUMER_SECRET = DEV ? process.env.TWITTER_CONSUMER_SECRET_DEV : process.env.TWITTER_CONSUMER_SECRET;

const twitterAuth = twitter({ TWITTER_CALLBACK_URL, TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET });

module.exports = () => {
  passport.use(twitterAuth);

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};
