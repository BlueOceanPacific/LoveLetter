const db = require('../../db');

module.exports = function (app) {
  app.get('/leaderboards', (req, res) => {
    db.User.find({}, {
      _id: 0, username: 1, gamesPlayed: 1, gamesWon: 1,
    }).exec()
      .then((results) => res.send(results))
      .catch((err) => res.status(500).send(err));
  });

  // Returns first 10 public games in the building state with less than 4 players
  app.get('/games', (req, res) => {
    db.Game.find({ privacy: 'public', state: 'building', 'players.3': { $exists: false } }).limit(10).exec()
      .then((results) => res.send(results))
      .catch((err) => res.status(500).send(err));
  });
};
