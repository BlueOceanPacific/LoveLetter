const db = require('../../db');

module.exports = function (app) {
  // Create game with {name, privacy, prize, user}
  // Return the MongoDB _id of the created game
  app.post('/games', (req, res) => {
    console.log('Game created: ', req.body);
    res.send(201);
  });

  // need to add a join game route and communicate with Nick

  // Get current game state - needs refactor to filter out fields for relevant users
  app.get('/games/:id', (req, res) => {
    console.log('Game requested: ', req.params.id);
    db.Game.find({ name: 'demo-playing' }).exec()
      .then((results) => res.send(results))
      .catch((err) => res.status(500).send(err));
  });

  // Submit a move
  app.post('/games/:id', (req, res) => {
    console.log('Game posted: ', req.params.id);
    console.log('Posted data: ', req.body);
    // send to the game engine
    res.send(200);
  });

  // Submit a chat
  app.post('/games/:id/chat', (req, res) => {
    console.log('Game posted: ', req.params.id);
    console.log('Chat data: ', req.body);
    demoGame.chat.push(req.body);
    res.send(201);
  });
};
