const express = require("express");
const userRouter = require("./user");
const User = require("../db/user");

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);

apiRouter.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then(user => {
      if (!user) {
        res.send("Wrong email or password!");
        return;
      }
      return user.comparePasswords(`${password}`);
    })
    .then(isMatch => {
      if (!isMatch) {
        res.send("Wrong email or password!");
        return;
      }
      res.send("Logged!");
    })
    .catch(next);
});

module.exports = apiRouter;;