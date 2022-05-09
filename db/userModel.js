/* eslint-disable consistent-return */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;

// User schema is simple for now: just username and password
const usersSchema = new Schema({
  username: { type: String, unique: true }, // unchangable for phase 1
  password: String, // unchangeable for phase 2
  email: String,
  pronouns: String,
  avatar: String,
  gamesPlayed: { type: Number, default: 0 }, // add default
  gamesWon: { type: Number, default: 0 }, // add default
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

const UserModel = mongoose.model('Users', usersSchema);

module.exports = UserModel;
