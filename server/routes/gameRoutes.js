module.exports = function (app) {
  app.get('/game/:id', (req, res) => {
    res.send('In game routes');
  });
};
