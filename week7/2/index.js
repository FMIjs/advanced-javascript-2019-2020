const express = require('express');

const authMiddleware = require('./middlewares.js')
const { router: userRouter } = require('./user');

const port = 3000;
const app = express();

app.use(express.json());

app.use('/user', authMiddleware, userRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
