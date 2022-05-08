const express = require('express');
const session = require('express-session');

// ------------ Middleware setup --------------------
const app = express();
app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'DownWithKingDare!!!',
  saveUninitialized: true,
  resave: false,
})); // Need to update to use a mongoDB session store

// ----------------- Routes -------------------------
require('./routes/userRoutes')(app);// user routes
require('./routes/baseRoutes')(app);// "base" routes like create game, get leaderboard, etc
require('./routes/gameRoutes')(app);// routes for actual gameplay

// eslint-disable-next-line no-console
app.listen(4000, () => console.log('listening on port 4000'));
