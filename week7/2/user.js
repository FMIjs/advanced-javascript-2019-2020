const express = require('express');
const router = express.Router();

const users = {
  1: {
    name: 'Ivan',
    age: 25
  }
};

// User router;
const userPutMiddleware = (req, res, next) => {
  const {
    name,
    ...others
  } = req.body;

  req.body = others;
  next();
};

router.route('/:id')
  .get((req, res) => {
    const { id } = req.params;

    const user = users[id];
    if (!user) { res.status(404).end(); return; }

    res.status(200).json(user).end();
  })
  .put(userPutMiddleware, (req, res) => {
    const { id } = req.params;
    const user = req.body;

    if (!users[id]) { res.status(404).end(); return; }
    users[id] = {
      ...users[id], // id, name, age
      ...user // name, age
    };

    res.status(200).json(users[id]).end();
  });


router.route('/')
  .post((req, res) => {
    const user = req.body;

    const newId = Object.keys(users).length;
    users[newId] = user;

    res.status(201).end();
  })
  .get((_req, res) => {
    res.status(200).json(users).end();
  });



module.exports = {
  users,
  router
};