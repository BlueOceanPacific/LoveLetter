module.exports = function (app) {
  app.get('/games/:id', (req, res) => {
    console.log('Game requested: ', req.params.id);
    // eslint-disable-next-line no-use-before-define
    res.send(demoGame);
  });
  app.post('/games/:id', (req, res) => {
    console.log('Game posted: ', req.params.id);
    console.log('Posted data: ', req.body);
    res.send(200);
  });
  app.post('/games/:id/chat', (req, res) => {
    console.log('Game posted: ', req.params.id);
    console.log('Chat data: ', req.body);
    demoGame.chat.push(req.body);
    res.send(201);
  });
};

const demoGame = {
  id: 12345,
  name: 'Dares room',
  state: 'playing', // state is building, playing, or ended
  host: { username: 'twheeler', pronouns: 'he/him/his', avatar: 'test.png' },
  players: [{ username: 'twheeler', pronouns: 'he/him/his', avatar: 'test.png' },
    { username: 'lcosta', pronouns: 'she/her/hers', avatar: 'test1.png' },
    { username: 'mteran', pronouns: 'he/him/his', avatar: 'test2.png' }],
  currentRound: {
    roundNumber: 2,
    turnNumber: 7,
    currentPlayer: 'twheeler',
    activeHands: {
      twheeler: {
        value: 3,
        hand: [{
          card: 'Clown',
          value: 2,
          image: 'imageUrlHere',
        },
        {
          card: 'Soldier',
          value: 1,
          image: 'imageUrlHere',
        }], // array of objects
      },
      mteran: {
        value: 7,
        hand: [{
          card: 'Priestess',
          value: 4,
          image: 'imageUrlHere',
        }],
      },
    },
    discardPiles: {
      twheeler: [{
        card: 'Minister',
        value: 7,
        image: 'imageUrlHere',
      }],
      lcosta: [{
        card: 'Prince',
        value: 8,
        image: 'imageUrlHere',
      }],
      mteran: [{
        card: 'Knight',
        value: 3,
        image: 'imageUrlHere',
      }],
    },
    deck: [{
      card: 'General',
      value: 6,
      image: 'imageUrlHere',
    }, {
      card: 'Minister',
      value: 7,
      image: 'imageUrlHere',
    }, {
      card: 'Clown',
      value: 2,
      image: 'imageUrlHere',
    },
    {
      card: 'Soldier',
      value: 1,
      image: 'imageUrlHere',
    }, {
      card: 'Wizard',
      value: 5,
      image: 'imageUrlHere',
    }], // rewrite deck as array of objects
  },
  roundWins: {
    twheeler: 0,
    lcosta: 1,
    mteran: 0,
  },
  chat: [
    {
      id: 3425432543,
      username: 'mteran',
      message: 'nice play @lcosta!',
    },
  ],
};
