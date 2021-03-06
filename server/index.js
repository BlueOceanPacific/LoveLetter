/* eslint-disable import/order */
const express = require('express');

const app = express();
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const Game = require('../db/gameModel');
// ------------ Socket.io setup ---------------------
const httpServer = require('http').createServer(app);
const { Server } = require('socket.io');

const io = new Server(httpServer);

const gameEngine = require('./routes/gameEngine');
// ------------ Middleware setup --------------------
app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sessionStore = new MongoDBStore({
  uri: 'mongodb://127.0.0.1/LoveLetter',
  collection: 'sessions',
});
sessionStore.on('error', (err) => console.log(err));
app.use(
  session({
    secret: 'DownWithKingDare!!!',
    saveUninitialized: true,
    store: sessionStore,
    resave: false,
  })
);

// ----------------- Routes -------------------------
require('./routes/userRoutes')(app); // user routes
require('./routes/baseRoutes')(app); // "base" routes like create game, get leaderboard, etc
require('./routes/gameRoutes')(app); // routes for actual gameplay

// ----------------- Listen for Socket IO Connections -------------------------
const playNamespace = io.of('/play');

playNamespace.use((socket, next) => {
  // if i knew how, i'd verify that the user connecting is authenticated,
  // then invoke the next function if they were =)
  next();
});

playNamespace.on('connection', (socket) => {
  const room = socket.handshake.query.id;
  socket.join(room);

  socket.on('lobbyUpdate', () => {
    socket.broadcast.to(room).emit('lobbyUpdate');
  });

  socket.on('updateGameState', ({ game, user, move }) => {
    // whenever a player joins a game, this event is fired
    console.log(`${user} played ${move} in ${game}`);
    gameEngine.process(game, user, move).then((gameState) => {
      // broadcasts update to all other users in room
      socket.to(room).emit('updateGameState', gameState);
      // broadcasts update to self
      socket.emit('updateGameState', gameState);
    });
  });

  socket.on('updateGameState', ({game, user, move}) => { // whenever a player joins a game, this event is fired
    console.log(`${user} played ${move} in ${game}`)
    gameEngine.process(game, user, move).then(gameState => {
      // broadcasts update to all other users in room
      socket.to(room).emit("updateGameState", gameState);
      // broadcast a system message chat
      if(gameState.systemChat) {
        console.log('systemChat generated! ', gameState.systemChat, room);
        // socket.broadcast.to(room).emit('chat', gameState.systemChat);
        const chat = {
          id: Date.now(),
          username: 'system',
          message: gameState.systemChat,
          timestamp: new Date().toLocaleTimeString('en-US').slice(0, -6)
        };
        socket.emit('chat', chat);
      }
      // broadcasts update to self
      socket.emit("updateGameState", gameState);
    })
  });

  socket.on('disconnect', () => { // whenever a player disconnect, this event is fired
    socket.leave(room);
  });
  // on 'chat' events in a room, send chat to clients in room, excluding sender
  socket.on('chat', (chat) => {
    socket.broadcast.to(room).emit('chat', chat);
  });
});

// app.listen but with socket io plugged in
httpServer.listen(4000, () => console.log('listening on port 4000'));
