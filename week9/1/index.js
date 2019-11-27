const express = require('express');
const port = 8080;
const app = express();
const apiRouter = require('./api');
require('./db');

// parse json forms and put all the values inside req.body
app.use(express.json());

app.use('/api', apiRouter);

function globalErrorHandler(err, req, res, next) {
  if (err.message === 'Unauthorized') {
    res.status(401).send('Unauthorized');
    return;
  }
  res.status(500).send('Server error!');
}

app.use(globalErrorHandler);

app.listen(port, function () {
  console.log(`Server is listening on ${port}`);
});