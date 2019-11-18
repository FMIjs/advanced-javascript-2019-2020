const { users } = require('./user');

const authMiddleware = (req, res, next) => {
  if (!req.headers.myauthheader) {
    res.status(401).end();
    return;
  }

  const userId = req.headers.myauthheader;
  const user = users[userId];

  if (!user) {
    res.status(401).end();
    return;
  }

  req.user = user;

  next();
};

module.exports = authMiddleware;