const db = require('../../db');
const GameEngine = require('./gameEngine');
const Game = require('../../db/gameModel');
const fullDeck = require('../../db/fullDeck');

module.exports = function (app) {
  // Create game with {name, privacy, prize, user}
  // Return the MongoDB _id of the created game
  app.post('/games', (req, res) => {
    const newGame = new Game(req.body);
    newGame.state = 'building';
    newGame.host = req.body.user;
    newGame.players = [this.host?.user || 'user'];
    newGame.roundWins = { [this.host?.username || 'user']: 0 };
    newGame.currentRound = {
      roundNumber: 1,
      turnNumber: 1,
      currentPlayer: this.host?.username || 'user', // current player is always the host, maybe update this to be random later on
      activeHands: { [this.host?.username || 'user']: { value: 0, hand: [] } },
      discardPile: [],
      deck: structuredClone(fullDeck),
    };
    console.log('Game created: ', newGame);
    newGame.save()
      .then(() => res.send(201))
      .catch((err) => res.status(500).send(err));
  });

  // need to add a join game route and communicate with Nick
  app.get('/games', (req, res) => {
    console.log('Game data')
    Game.find({})
      .exec()
      .then((results) => console.log(results));
  })

  // Get current game state - needs refactor to filter out fields for relevant users
  app.get('/games/:id', (req, res) => {
    console.log('Game requested: ', req.params.id);
    Game.findOne({ _id: req.params.id })
      .exec()
      .then((results) => res.send(results))
      .catch((err) => res.status(500).send(err));
  });

  // Submit a move
  app.post('/games/:id', (req, res) => {
    console.log('Game posted: ', req.params.id);
    console.log('Posted data: ', req.body);
    GameEngine.process(req.params.id, req.body.user, req.body.move)
      .then(() => res.send(201))
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
  });

  // Submit a chat
  app.post('/games/:id/chat', (req, res) => {
    console.log('Game posted: ', req.params.id);
    console.log('Chat data: ', req.body);
    demoGame.chat.push(req.body);
    res.send(201);
  });
};
