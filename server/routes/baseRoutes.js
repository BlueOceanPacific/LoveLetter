module.exports = function (app) {
  app.get('/create', (req, res) => {
    res.send('In home routes');
  });
};
