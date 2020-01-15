const jwt = require('jsonwebtoken');

const JWT_SECRET = 'secret';

// All options -> https://github.com/auth0/node-jsonwebtoken
const baseOptions = { issuer: 'fmiJS' };

function createToken(payload, expieryTime) {
  const options = !!expieryTime ? { ...baseOptions, expiresIn: expieryTime } : { ...baseOptions };

  return new Promise((resolve, reject) => {
    jwt.sign(payload, JWT_SECRET, options, (err, token) => {
      if (err) { reject(err); return; }
      resolve(token);
    });
  });
}

function decode(token) {
  return jwt.decode(token);
}

function verify(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, baseOptions, (err, decoded) => {
      if (err) {
        reject(err); return;
      }
      resolve(decoded);
    });
  });
}

module.exports = {
  createToken,
  decode,
  verify
}