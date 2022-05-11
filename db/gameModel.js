const mongoose = require('mongoose');

const { Schema } = mongoose;

// User schema is simple for now: just username and password
const gamesSchema = new Schema({
  name: {type: String, unique: true},
  privacy: String,
  state: String,
  host: Object,
  players: [Object],
  currentRound: {
    roundNumber: {type: Number, default: 1},
    turnNumber: {type: Number, default: 1},
    currentPlayer: String,
    activeHands: Object,
    discardPile: [Object],
    deck: [],
    faceDownCard: Object,
  },
  message: String,
  roundWins: Object,
  chat: [new Schema({ username: String, message: String })],
});

const GameModel = mongoose.model('Games', gamesSchema);

module.exports = GameModel;
