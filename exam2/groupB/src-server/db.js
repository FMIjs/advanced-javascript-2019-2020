
const mongoose = require('mongoose');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongo DB connection error:'));
db.once('open', function () {
  console.log('Mongo DB connected!');
});

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
});

module.exports = {
  db,
  connect: function () {
    mongoose.connect('mongodb://localhost/fmiJS', { useNewUrlParser: true });
  },
  UserModel: mongoose.model('User', userSchema)
};
