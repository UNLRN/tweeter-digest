const cors = require('cors');

const DEV = process.env.NODE_ENV !== 'production';

module.exports = app => {
  app.use(cors({
    credentials: true,
    origin: DEV ? [/localhost/] : [/placeholder/],
  }));
};
