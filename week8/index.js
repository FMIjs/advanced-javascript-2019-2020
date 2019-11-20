const express = require('express');
const port = 8080;
const app = express();

const apiRouter = express.Router();

apiRouter.get('/test', function (req, res) {
  res.send('a');
});

app.use('/api/user', apiRouter);

function globalErrorHandler(err, req, res, next) {
  if (err.message === 'Unauthorized') {
    res.status(401).send('Unauthorized');
    return;
  }
  res.status(500).send('Server error!');
}

function myMiddleware(req, res, next) {
  if (req.headers['access-token']) {
    next();
    return;
  }
  next(new Error('Unauthorized'));
}

app.get('/', myMiddleware, function (req, res) {
  res.send('Hello!');
});

app.get('/api', function (req, res) {
  res.send('Hello api!');
});

app.use(globalErrorHandler);

app.listen(port, function () {
  console.log(`Server is listening on ${port}`);
});