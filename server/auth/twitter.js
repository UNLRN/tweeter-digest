const TwitterStrategy = require('passport-twitter').Strategy;

module.exports = options => {
  const {
    CALLBACK_URL,
    TWITTER_CONSUMER_KEY,
    TWITTER_CONSUMER_SECRET,
  } = options;

  return new TwitterStrategy({
    consumerKey: TWITTER_CONSUMER_KEY,
    consumerSecret: TWITTER_CONSUMER_SECRET,
    callbackUrl: CALLBACK_URL,
  }, (token, tokenSecret, profile, done) => {
    return done(null, profile);
  });
};
