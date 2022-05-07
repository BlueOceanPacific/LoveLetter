const bcrypt = require('bcryptjs');
const db = require('../../db');

module.exports = function (app) {
  /*
  * Compares password submitted by user with hashed password stored in DB
  * Sends back {valid: true} if the password is correct, {valid: false} if incorrect
  * Will sends an error in any other case
  */
  app.post('/auth/login', (req, res) => {
    db.User.findOne({ username: req.body.username }).exec()
      .then((user) => {
        bcrypt.compare(req.body.password, user.password, (error, isMatch) => {
          if (error) {
            throw error;
          } else if (!isMatch) {
            res.send({ valid: false });
          } else {
            res.send({ valid: true });
          }
        });
      })
      .catch((err) => res.status(500).send(err));
  });

  // Saves new user with {username: username, password: password} to the db
  // Uses bcrypt middleware to encrypt and store their password
  app.post('/auth/signup', (req, res) => {
    const newUser = new db.User(req.body);
    newUser.save()
      .then(() => res.send(201))
      .catch((err) => res.status(500).send(err));
  });
};
