const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        );
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
});

userSchema.pre("save", function (done) {
  if (!this.isModified("password")) {
    done();
    return;
  }
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
      done(err);
      return;
    }
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) {
        done(err);
        return;
      }
      this.password = hash;
      done();
    });
  });
});

userSchema.methods.comparePasswords = function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("user", userSchema);

module.exports = User;;