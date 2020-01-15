const express = require('express');
const { UserModel } = require('./db');
const jwt = require('./jwt');

const router = express.Router();

module.exports = { router };

router.get('/authenticate', (req, res) => { })

router.get('/', (_, res) => {
  UserModel.find({})
    .then(users => res.send(users))
    .catch(err => res.status(400).send(err.message))
});

router.get('/:id', (req, res) => {
  UserModel.findById(req.params.id)
    .then(users => res.send(users))
    .catch(err => res.status(400).send(err.message))
});

router.post('/', (req, res) => {
  const { body } = req;

  const user = new UserModel(body);
  user.save()
    .then(({ _id }) => res.send(`User ${_id} created successfully!`))
    .catch(err => res.status(400).send(err.message));
});

// router.post('/login', login);
