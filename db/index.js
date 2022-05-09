const mongoose = require('mongoose');
const User = require('./userModel');
const Game = require('./gameModel');
const TestData = require('./testData'); // REMOVE FOR FINAL VERSION

const mongoDB = 'mongodb://127.0.0.1/LoveLetter';
mongoose.connect(mongoDB);

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

module.exports.User = User;
module.exports.Game = Game;
