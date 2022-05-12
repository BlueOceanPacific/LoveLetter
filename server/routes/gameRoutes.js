const GameEngine = require("./gameEngine");
const Game = require("../../db/gameModel");

module.exports = function (app) {
  // Create game with {name, privacy, prize, user}
  // Return the MongoDB _id of the created game
  app.post("/games", (req, res) => {
    const newGame = new Game(req.body);
    newGame.state = "building";
    newGame.host = req.body.user;
    newGame.players = [req.body.user || "user"];
    newGame.currentRound = {
      roundNumber: 0,
    };
    newGame
      .save()
      .then((results) => {
        // console.log('results here -> ', results.name);
        res.status(201).send(results.name);
      })
      .catch((err) => res.status(500).send(err));
  });

  app.post("/games/:name/join", (req, res) => {
    // Search for the game, confirm it has less than 4 players
    Game.findOne({ name: req.params.name }).exec()
    .then((game) => {
      if (game.players.length < 4) {
        game.players.push(req.body.user);
        game.markModified('players');
        game.save()
          .then(() => res.sendStatus(201))
          .catch(()=> res.sendStatus(500));
      } else {
        res.sendStatus(500);
      }
    })
    .catch(() => res.sendStatus(500));
    // If it does, add the input player and send success
    // If it doesnt, send error
  });

  //remove a player if leave lobby
  app.post("/games/:name/leave", (req, res) => {
    //Search for the game, confirm it has less than 4 players
    Game.findOne({ name: req.params.name }).exec()
    .then((game) => {
      const index = game.players.indexOf(req.body.user)
      game.players.splice(index, 1)
      game.markModified('players');
      game.save()
        .then(() => res.sendStatus(201))
        .catch(()=> res.sendStatus(500));
    })
    .catch(() => res.sendStatus(500));
  });

  app.post("/games/:name/start", (req, res) => {
    // Search for the game, confirm it has less than 4 players
    Game.findOne({ name: req.params.name }).exec()
    .then((game) => {
      game.state = 'playing';
      GameEngine.nextRound(game);
      game.save()
        .then(() => {
          console.log('Game saved: ', JSON.stringify(game));
          res.sendStatus(201)
        })
        .catch((err) => res.status(500).send(err));
    })
    .catch((err) => res.status(500).send(err));
    // If it does, add the input player and send success
    // If it doesnt, send error
  });

  // need to add a join game route and communicate with Nick
  app.get("/games", (req, res) => {
    console.log("Game data");
    Game.find({})
      .exec()
      .then((results) => console.log(results));
  });

  // Get current game state - needs refactor to filter out fields for relevant users
  app.get("/games/:name", (req, res) => {
    console.log("Name: ", req.params.name);
    Game.findOne({ name: req.params.name })
      .exec()
      .then((results) => res.send(results))
      .catch((err) => res.status(500).send(err));
  });

  // Submit a move
  app.post("/games/:name", (req, res) => {
    console.log("Game posted: ", req.params.name);
    console.log("Posted data: ", req.body);
    GameEngine.process(req.params.name, req.body.user, req.body.move)
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
  });

  // Submit a chat
  app.post("/games/:name/chat", (req, res) => {
    console.log("Game posted: ", req.params.name);
    console.log("Chat data: ", req.body);
    demoGame.chat.push(req.body);
    res.sendStatus(201);
  });
};
