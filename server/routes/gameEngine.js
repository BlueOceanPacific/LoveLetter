/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
const db = require('../../db');

// Questions:
// Single discard pile, or discard pile per player?
// Expectations on post (gameID, username, move: {card: {}, target (opt), cardguess(opt)})
module.exports.process = (gameName, user, move) => new Promise((resolve, reject) => {
  console.log(gameName, user, move);
  db.Game.findOne({ name: gameName }).exec()
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
}

function discardCard(state, user, move) {
  // add card from move to users discarded pile
  state.currentRound.discardPile.push(move.card);
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
  state.currentRound.message = null;

  switch (move.card.card) {
    case 'Prince': //Out of the match
      state.currentRound.discardPile.push(...state.currentRound.activeHands[user].hand);
      delete state.currentRound.activeHands[user];
      state.currentRound.message = `${user} is out of the round - they played the Prince!`;
      break;
    case 'Princess': //Out of the match
      state.currentRound.discardPile.push(...state.currentRound.activeHands[user].hand);
      delete state.currentRound.activeHands[user];
      state.currentRound.message = `${user} is out of the round - they played the Princess!`;
      break;
    case 'Liege': //Out of the match
      state.currentRound.discardPile.push(...state.currentRound.activeHands[user].hand);
      delete state.currentRound.activeHands[user];
      state.currentRound.message = `${user} is out of the round - they played the Liege!`;
      break;
    case 'Minister': //no effect on discard
      break;
    case 'General': //Change hands with target player (must not be self) CURRENTLY NO VALIDATION ON SELF TARGET
      const tmp = state.currentRound.activeHands[user].hand.slice();
      state.currentRound.activeHands[user] = state.currentRound.activeHands[move.target].hand.slice();
      state.currentRound.activeHands[move.target].hand = tmp;
      state.currentRound.message = `${user} uses the General to change hands with ${move.target}!`;
      break;
    case 'Wizard': // Target player discards hand, draws new card (can target self)
      state.currentRound.activeHands[move.target].hand = [state.currentRound.deck.pop()];
      //Need to handle wizard being played on last card, swapping with face down card.
      state.currentRound.message = `${user} plays the Wizard. ${move.target} draws a new hand!`;
      break;
    case 'Priestess': // Cannot be targeted by other players until your next turn NOT SURE HOW TO HANDLE
      state.currentRound.message = `I haven't figured out how to implment Priestess yet!!`
      break;
    case 'Knight':
      // Compare hand value with target player. Lowest value is out of the round, tie = both stay;
      const handDiff = state.currentRound.activeHands[user].value - state.currentRound.activeHands[move.target].value;
      if (handDiff > 0) { // user hand is higher value than target hand
        state.currentRound.discardPile.push(...state.currentRound.activeHands[move.target].hand);
        delete state.currentRound.activeHands[move.target];
        state.currentRound.message = `${move.target} is knocked out of the round by a Knight!`;
      } else if (handDiff < 0) { // user hand is lower value than target hand
        state.currentRound.discardPile.push(...state.currentRound.activeHands[user].hand);
        delete state.currentRound.activeHands[user];
        state.currentRound.message = `${user} is knocked out of the round by a Knight!`;
      } else {
        state.currentRound.message = `A knight is played - neither side has an advantage!`;
      }
      break;
    case 'Clown': // Look at target players hand NOT SURE HOW TO HANDLE
      state.currentRound.message = `I haven't figured out how to implment Clown yet!!`
      break;
    case 'Soldier': // Choose a card type other than Soldier. If target player has card, they are out
      if(state.currentRound.activeHands[move.target].hand[0].card === move.guess) {
        state.currentRound.discardPile.push(...state.currentRound.activeHands[move.target].hand);
        delete state.currentRound.activeHands[move.target];
        state.currentRound.message = `${user}'s Soldier strikes ${move.target} with a fatal blow!`;
      } else {
        state.currentRound.message = `${user}'s Soldier misses their mark!`;
      }
      break;
    default:
      return;
  }
  return true;
}

// Find the next active player and draw a card into their hand
function processDraw(state) {
  //If deck is empty after a move, end round
  if (!state.currentRound.deck.length) {
    endRound(state);
  }
  const nextCard = state.currentRound.deck.pop();
  const { currentPlayer } = state.currentRound;
  console.log('CurrentPlayer: ', currentPlayer);
  let playerPos;
  for (let i = 0; i < state.players.length; i += 1) {
    if (state.players[i].username === currentPlayer) {
      playerPos = i;
    }
  }
  let nextPlayer = null;
  while (!nextPlayer) {
    playerPos = (playerPos + 1) % (state.players.length);
    const playerName = state.players[playerPos].username;
    console.log('PlayerName: ', playerName);
    if (state.currentRound.activeHands[playerName]) {
      nextPlayer = playerName;
    }
  }
  state.currentRound.currentPlayer = nextPlayer;
  state.currentRound.activeHands[nextPlayer].hand.push(nextCard);
  state.currentRound.activeHands[nextPlayer].value += nextCard.value;
  //check if new player has drawn over 12 with a minister, if so we kick them
  if (state.currentRound.activeHands[nextPlayer].value >= 12 && (state.currentRound.activeHands[nextPlayer].hand[0].card === 'Minister' || state.currentRound.activeHands[nextPlayer].hand[1].card === 'Minister')) {
    state.currentRound.discardPile.push(...state.currentRound.activeHands[nextPlayer].hand);
    delete state.currentRound.activeHands[nextPlayer];
  }

  if (Object.keys(state.currentRound.activeHands).length === 1) {
    endRound(state);
  }
}

//increment round counter, scoreboard, and check for 4 wins
//re-shuffle deck, re-deal
function endRound(state) { //make room name unique

}

// check if the round has ended
function checkGameEnd(state) {
  return false;
}

// ends a game
function endGame(state) {
  return true;
}
