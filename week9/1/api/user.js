const express = require("express");
const User = require("../db/user");

const userRouter = express.Router();

userRouter.get("/", function(req, res, next) {
  User.find()
    .then(users => res.send(users))
    .catch(next);
});

userRouter.get("/:id", function(req, res, next) {
  const id = req.params.id;
  User.findById(id)
    .then(user => res.send(user))
    .catch(next);
});

userRouter.delete("/:id", function(req, res, next) {
  const id = req.params.id;
  User.findByIdAndDelete(id)
    .then(user => res.send(user))
    .catch(next);
});

userRouter.post("/", function(req, res, next) {
  const { email, password } = req.body;

  return User.create({ email, password })
    .then(insertedUser => res.send(insertedUser))
    .catch(next);
});

userRouter.put("/:id", function(req, res, next) {
  const id = req.params.id;
  const { email, password } = req.body;
  const updates = { email, password };

  User.findById(id)
    .then(user => {
      Object.entries(updates).forEach(([key, value]) => {
        if(!value) { return; }
        user.set(key, value);
      });
      return user.save();
    })
    .then(updated => res.send(updated))
    .catch(next);
});

module.exports = userRouter;;