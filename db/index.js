/* eslint-disable consistent-return */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const mongoDB = 'mongodb://127.0.0.1/LoveLetter';
mongoose.connect(mongoDB);

const { Schema } = mongoose;

// User schema is simple for now: just username and password
const usersSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
  email: String,
  pronouns: String,
  avatar: String,
  gamesPlayed: Number,
  gamesWon: Number,
});

// Before saving a password, we hash it with bycrypt to ensure no live passwords are stored
usersSchema.pre('save', function (next) {
  const user = this;

  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, (saltError, salt) => {
      if (saltError) {
        return next(saltError);
      }
      bcrypt.hash(user.password, salt, (hashError, hash) => {
        if (hashError) {
          return next(hashError);
        }

        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

const User = mongoose.model('Users', usersSchema);

module.exports.User = User;
