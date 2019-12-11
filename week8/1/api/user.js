const express = require('express');
const Entity = require('../db/entity')
  ;
const user = new Entity('users');

const userRouter = express.Router();

userRouter.get('/', function (req, res) {
  res.send('Hello from User');
});

userRouter.get('/:id', function (req, res) {

});

userRouter.post('/', function (req, res) {
  const { fistName, lastName, age } = req.body;

  return user.insert({ fistName, lastName, age })
    .then(insertedUser => res.send(insertedUser));
});

userRouter.put('/:id', function (req, res) {

});

module.exports = userRouter;