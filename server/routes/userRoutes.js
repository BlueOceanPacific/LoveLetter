/* eslint-disable no-console */
const bcrypt = require('bcryptjs');
const db = require('../../db');

module.exports = function (app) {
  app.get('/authTest', (req, res) => {
    const { session } = req;
    console.log(session);
    res.send(200);
  });
  /*
  * Compares password submitted by user with hashed password stored in DB
  * Sends back user object if login is correct
  * Will sends an error in any other case
  */
  app.post('/user/login', (req, res) => {
    db.User.findOne({ username: req.body.username }).exec()
      .then((user) => {
        bcrypt.compare(req.body.password, user.password, (error, isMatch) => {
          const { session } = req;
          if (error) {
            throw error;
          } else if (!isMatch) {
            res.send();
          } else {
            session.username = req.body.username;
            session.loggedIn = true;
            const {
              username, email, pronouns, avatar,
            } = user;
            res.send({user: {
              username, email, pronouns, avatar,
            }});
          }
        });
      })
      .catch((err) => res.status(500).send(err));
  });

  // Saves new user with {username: username, password: password} to the db
  // Uses bcrypt middleware to encrypt and store their password
  app.post('/user/signup', (req, res) => {
    const newUser = new db.User(req.body);
    newUser.save()
      .then(() => res.send(201))
      .catch((err) => res.status(500).send(err));
  });

  // Returns a user profile (all fields excluding password)
  app.get('/user/profile', (req, res) => {
    console.log('get req user profile', req.body);
    db.User.findOne({ username: req.body.username }).exec()
      .then((user) => {
        const {
          username, email, pronouns, avatar, gamesPlayed, gamesWon,
        } = user;
        res.send({
          username, email, pronouns, avatar, gamesPlayed, gamesWon,
        });
      })
      .catch((err) => res.status(500).send(err));
  });

  // Updates a user profile - only allows pronoun and avatar updates
  app.put('/user/profile', (req, res) => {
    db.User.updateOne({ username: req.body.username }, {
      pronouns: req.body.pronouns,
      avatar: req.body.avatar,
    }).exec()
      .then(() => res.send(200))
      .catch((err) => res.status(500).send(err));
  });
};
