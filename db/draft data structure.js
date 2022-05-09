// Game document
{
  id: 12345,
    state: playing, // state is building, playing, or ended
      host: 'twheeler',
        players: ['twheeler', 'lcosta', 'mteran'],
          currentRound: {
    roundNumber: 2,
      turnNumber: 7,
        currentPlayerPos: 1,
          activeHands: {
      'twheeler': {
        value: 3,
          hand: ['soldier', 'wizard', 'clown'], //array of objects
      }
      'mteran': {
        value: 6,
          hand: ['knight', 'priestess', 'liege'], //array of objects
      }
    },
    discardPiles: {
      'twheeler': ['minister'],
        'lcosta': ['prince'],
          'mteran': ['knight'],
    }
    deck: ['general', 'minister', 'soldier', 'clown', 'wizard'] // rewrite deck as array of objects
  },
  roundWins: {
    'twheeler': 0,
      'lcosta': 1,
        'mteran': 0
  },
  chat: [
    {
      id: 3425432543,
      username: 'mteran',
      message: 'nice play @lcosta!',
    }
  ]
}

fullDeck = [
  {
    card: 'Prince',
    value: 8,
    image: 'imageUrlHere',
  },
  {
    card: 'Minister',
    value: 7,
    image: 'imageUrlHere',
  },
  {
    card: 'General',
    value: 6,
    image: 'imageUrlHere',
  },
  {
    card: 'Wizard',
    value: 5,
    image: 'imageUrlHere',
  },
  {
    card: 'Wizard',
    value: 5,
    image: 'imageUrlHere',
  },
  {
    card: 'Priestess',
    value: 4,
    image: 'imageUrlHere',
  },
  {
    card: 'Priestess',
    value: 4,
    image: 'imageUrlHere',
  },
  {
    card: 'Knight',
    value: 3,
    image: 'imageUrlHere',
  },
  {
    card: 'Knight',
    value: 3,
    image: 'imageUrlHere',
  },
  {
    card: 'Clown',
    value: 2,
    image: 'imageUrlHere',
  },
  {
    card: 'Clown',
    value: 2,
    image: 'imageUrlHere',
  },
  {
    card: 'Soldier',
    value: 1,
    image: 'imageUrlHere',
  },
  {
    card: 'Soldier',
    value: 1,
    image: 'imageUrlHere',
  },
  {
    card: 'Soldier',
    value: 1,
    image: 'imageUrlHere',
  },
  {
    card: 'Soldier',
    value: 1,
    image: 'imageUrlHere',
  },
  {
    card: 'Soldier',
    value: 1,
    image: 'imageUrlHere',
  },
]



//Users table / document
// ID | Username | Password | Games Played | Games Won | Reported Count

usersDraft = {
  {
  "username": "twheeler",
    "password": "twheeler",
      "email": "twheeler@tw.com",
        "pronouns": "Your Grace",
          "avatar": "../client/dist/images/avatars/redHatCat.png",
            "gamesPlayed": 37,
              "gamesWon": 30,
  },
  {
    "username": "lcosta",
      "password": "lcosta",
        "email": "lcosta@lc.com",
          "pronouns": "peasant",
            "avatar": "../client/dist/images/avatars/blueFlowersCat.png",
              "gamesPlayed": 3,
                "gamesWon": 0,
    },
    {
      "username": ",mteran",
        "password": "mteran",
          "email": "mteran@mt.com",
            "pronouns": "My Lord",
              "avatar": "../client/dist/images/avatars/underBlanketCat.png",
                "gamesPlayed": 37,
                  "gamesWon": 30,
      },


}