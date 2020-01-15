const express = require('express');
const path = require('path');
const cors = require('cors');

const publicFolderPath = path.join(__dirname, '..', 'public');

const db = require('./db');
const bodyParser = require('body-parser');
const { router: apiRouter } = require('./api');

db.connect();

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(publicFolderPath));

app.use('/api', apiRouter);

app.get('/', (_, res) => {
  res.sendFile(path.join(publicFolderPath, 'index.html'));
});

const port = 8082;
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
