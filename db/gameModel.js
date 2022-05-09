const mongoose = require('mongoose');

const { Schema } = mongoose;

// User schema is simple for now: just username and password
const gamesSchema = new Schema({
  name: String,
  privacy: String,
  state: String,
  host: Object,
  players: [Object],
  currentRound: {
    roundNumber: Number,
    turnNumber: Number,
    currentPlayer: String,
    activeHands: Object,
    discardPiles: Object,
    deck: [],
  },
  roundWins: Object,
  chat: [new Schema({ username: String, message: String })],
});

const GameModel = mongoose.model('Games', gamesSchema);

module.exports = GameModel;
