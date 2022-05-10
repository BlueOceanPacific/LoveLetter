/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
const db = require('../../db');

// Questions:
// Single discard pile, or discard pile per player?
// Expectations on post (gameID, username, move: {card: {}, target (opt), cardguess(opt)})
module.exports.process = (gameID, user, move) => new Promise((resolve, reject) => {
  console.log(gameID, user, move);
  db.Game.findOne({ _id: gameID }).exec()
    .then((gameState) => {
      updateState(gameState, user, move);
      gameState.save()
        .then(() => {
          resolve(gameState);
        })
        .catch((err) => reject(err));
    })
    .catch((err) => reject(err));
});
// check to see if the round has ended (or round is beginning)
// if yes, check to see if game has ended, handle ending the game
// updates state based on a given move
function updateState(state, user, move) {
  // Make sure Mongo will save our changes to the current round
  state.markModified('currentRound');
  // Discard the played card from the users hand
  discardCard(state, user, move);
  // process the move (check if prince / princess / liege was discarded)
  processMove(state, user, move);
  // pre-process the draw of the next card for the next player, update their hand
  processDraw(state);
  // check if any user is holding a minister with value of hand 12 or higher
  checkRoundEnd(state);
}

function discardCard(state, user, move) {
  // add card from move to users discarded pile
  state.currentRound.discardPiles[user].push(move.card);
  // remove card from move from users hand
  if (state.currentRound.activeHands[user].hand[0].card === move.card.card) {
    state.currentRound.activeHands[user].hand = [state.currentRound.activeHands[user].hand[1]];
  } else {
    state.currentRound.activeHands[user].hand = [state.currentRound.activeHands[user].hand[0]];
  }
  state.currentRound.activeHands[user].value -= move.card.value;
}

// Process the move based on given rules;
function processMove(state, user, move) {
  return true;
}

function processDraw(state) {
  const nextCard = state.currentRound.deck.pop();
  const { currentPlayer } = state.currentRound;
  let playerPos;
  for (let i = 0; i < state.players.length; i += 1) {
    if (state.players[i].username === currentPlayer) {
      playerPos = i;
    }
  }
  let nextPlayer = null;
  while (!nextPlayer) {
    playerPos = (playerPos + 1) % (state.players.length - 1);
    const playerName = state.players[playerPos].username;
    if (state.currentRound.activeHands[playerName]) {
      nextPlayer = playerName;
    }
  }
  console.log('CurrentPlayer: ', currentPlayer);
  console.log('Next player: ', nextPlayer);
  state.currentRound.currentPlayer = nextPlayer;
  state.currentRound.activeHands[nextPlayer].hand.push(nextCard);
}
// check if the round has ended
function checkRoundEnd(state) {
  // only one user remains, or the deck is out of cards
  return false;
}

// check if the round has ended
function checkGameEnd(state) {
  return false;
}

// ends a game
function endGame(state) {
  return true;
}
