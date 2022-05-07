module.exports = function (app) {
  app.get('/leaderboards', (req, res) => {
    res.send([{ username: 'KingDare', gamesPlayed: 7, gamesWon: 7 },
      { username: 'twheel49334', gamesPlayed: 6, gamesWon: 1 },
      { username: 'steve', gamesPlayed: 23, gamesWon: 5 },
      { username: 'bob', gamesPlayed: 16, gamesWon: 12 },
      { username: 'jim', gamesPlayed: 4, gamesWon: 0 },
      { username: 'mark', gamesPlayed: 33, gamesWon: 8 },
      { username: 'eliza', gamesPlayed: 78, gamesWon: 35 },
      { username: 'jenny', gamesPlayed: 13, gamesWon: 10 },
    ]);
  });
};
