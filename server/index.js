const express = require('express');

const app = express();
app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/authRoutes')(app);// authentication routes
require('./routes/baseRoutes')(app);// "base" routes like create game, get leaderboard, etc
require('./routes/gameRoutes')(app);// routes for actual gameplay

app.get('/', (req, res) => {
  res.send('Hello World');
});

// eslint-disable-next-line no-console
app.listen(4000, () => console.log('listening on port 4000'));
