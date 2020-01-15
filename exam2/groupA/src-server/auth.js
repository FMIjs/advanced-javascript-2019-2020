const COOKIE_NAME = 'cookie';
const { UserModel } = require('./db');

function login(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send('...')
    return;
  }

  userModel.findOne({ where: { email } })
    .then(user => Promise.all([
      Promise.resolve(user),
      // ... authenticate
    ]))
    .then(([user, isAuthenticated]) => {
      if (!user || !isAuthenticated) {
        // ...
      }
      const createAccessToken = jwt.createToken({ id: user.id }, '1h');

      return Promise.all([user, createAccessToken]);
    }).then(createRefreshToken).then(([user, token]) => {
      res.cookie(COOKIE_NAME, token, { httpOnly: true }).send({ user })
    }).catch(err => {
      // ...
    });
}

function authenticate(req, res, next) {
  const accessToken = req.cookies[COOKIE_NAME];
  if (!accessToken) {
    // ...
    return;
  }

  jwt.verify(accessToken)
    .then(({ id }) => models.user.findByPk(id, { include: [userIncludeOwnedGroupsFull, includeUserGroups] }))
    .then(user => {
      return compareTokens(accessToken, refreshToken).then(({ success }) => {
        if (!success) {
          // ...
          return;
        }
        res.status(200).send({ user }).end();
      });
    }).catch(err => {
      // ...
    });
};