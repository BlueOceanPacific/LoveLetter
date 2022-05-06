const express = require('express');

const app = express();
app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

// eslint-disable-next-line no-console
app.listen(4000, () => console.log('listening on port 4000'));
