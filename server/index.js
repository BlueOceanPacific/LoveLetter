const express = require('express');

const app = express();
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
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
app.use(session({
  secret: 'DownWithKingDare!!!',
  saveUninitialized: true,
  store: sessionStore,
  resave: false,
}));

// ----------------- Routes -------------------------
require('./routes/userRoutes')(app);// user routes
require('./routes/baseRoutes')(app);// "base" routes like create game, get leaderboard, etc
require('./routes/gameRoutes')(app);// routes for actual gameplay

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
  
  socket.on('join', (user) => { // whenever a player joins a game, this event is fired
    console.log(user.username, 'connected in room', room);
  });
  
  socket.on('updateGameState', ({game, user, move}) => { // whenever a player joins a game, this event is fired
    console.log(`${user} played ${move} in ${game}`)
    gameEngine.process(game, user, move).then(gameState => {
      socket.to(room).emit("updateGameState", gameState);
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
