const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

// ------------ Middleware setup --------------------
const app = express();
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

// eslint-disable-next-line no-console
app.listen(4000, () => console.log('listening on port 4000'));
