const mongoose = require('mongoose');
const User = require('./userModel');
const Game = require('./gameModel');
const TestData = require('./testData'); // REMOVE FOR FINAL VERSION

const mongoDB = 'mongodb://127.0.0.1/LoveLetter';
mongoose.connect(mongoDB);

// ----------------------- Uncomment to Empty DB on Server Restart ------------------------
// Game.deleteMany({}).then(() => console.log('Games Collection Truncated'));
// User.deleteMany({}).then(() => console.log('Users Collection Truncated'));

// REMOVE BELOW FOR FINAL VERSION
Game.find({}).exec()
  .then((results) => {
    if (!results.length) {
      const BuildingGame = new Game(TestData.demoBuilding);
      BuildingGame.save();
      const PlayingGame = new Game(TestData.demoPlaying);
      PlayingGame.save();
    }
  });
User.find({}).exec()
  .then((results) => {
    if (!results.length) {
      const Jacob = new User({ username: 'Jacob', password: 'pass', gamesPlayed: 17, gamesWon: 16 });
      const Lucas = new User({ username: 'Lucas', password: 'pass', gamesPlayed: 12, gamesWon: 2 });
      const Matt = new User({ username: 'Matt', password: 'pass', gamesPlayed: 45, gamesWon: 20 });
      const Nick = new User({ username: 'Nick', password: 'pass', gamesPlayed: 8, gamesWon: 2 });
      Jacob.save();
      Lucas.save();
      Matt.save();
      Nick.save();
    }
  });

module.exports.User = User;
module.exports.Game = Game;
