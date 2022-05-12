/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
const db = require('../../db');
const fullDeck = require('../../db/fullDeck');

// Questions:
// Single discard pile
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
function processMove(state, user, move) { //refactor play messages to be added to chat
  state.message = null;
  state.markModified('message');
  state.markModified('chat');
  state.currentRound.activeHands[user].targetable = true; // reset targetable status
  state.currentRound.activeHands[user].canSee = null; // reset targetable status
  switch (move.card.card) {
    case 'Prince': //Out of the match
      state.currentRound.discardPile.push(...state.currentRound.activeHands[user].hand);
      delete state.currentRound.activeHands[user];
      state.chat.push({username: 'system', message:`${user} is out of the round - they played the Prince!`});
      break;
    case 'Princess': //Out of the match
      state.currentRound.discardPile.push(...state.currentRound.activeHands[user].hand);
      delete state.currentRound.activeHands[user];
      state.chat.push({username: 'system', message:`${user} is out of the round - they played the Princess!`});
      break;
    case 'Liege': //Out of the match
      state.currentRound.discardPile.push(...state.currentRound.activeHands[user].hand);
      delete state.currentRound.activeHands[user];
      state.chat.push({username: 'system', message:`${user} is out of the round - they played the Liege!`});
      break;
    case 'Minister': //no effect on discard
      break;
    case 'General': //Change hands with target player (must not be self) CURRENTLY NO VALIDATION ON SELF TARGET
      const tmp = state.currentRound.activeHands[user].hand.slice();
      state.currentRound.activeHands[user] = state.currentRound.activeHands[move.target].hand.slice();
      state.currentRound.activeHands[move.target].hand = tmp;
      state.chat.push({username: 'system', message:`${user} uses the General to change hands with ${move.target}!`});
      break;
    case 'Wizard': // Target player discards hand, draws new card (can target self)
      state.currentRound.activeHands[move.target].hand = state.currentRound.deck.length ? [state.currentRound.deck.pop()] : [state.currentRound.faceDownCard];
      state.chat.push({username: 'system', message:`${user} plays the Wizard. ${move.target} draws a new hand!`});
      break;
    case 'Priestess': // Cannot be targeted by other players until your next turn NOT SURE HOW TO HANDLE
      state.currentRound.activeHands[user].targetable = false;
      state.chat.push({username: 'system', message:`${user} is protected by the Priestess - they may not be targeted until the next round!`});
      break;
    case 'Knight':
      // Compare hand value with target player. Lowest value is out of the round, tie = both stay;
      const handDiff = state.currentRound.activeHands[user].value - state.currentRound.activeHands[move.target].value;
      if (handDiff > 0) { // user hand is higher value than target hand
        state.currentRound.discardPile.push(...state.currentRound.activeHands[move.target].hand);
        delete state.currentRound.activeHands[move.target];
        state.chat.push({username: 'system', message:`${move.target} is knocked out of the round by a Knight!`});
      } else if (handDiff < 0) { // user hand is lower value than target hand
        state.currentRound.discardPile.push(...state.currentRound.activeHands[user].hand);
        delete state.currentRound.activeHands[user];
        state.chat.push({username: 'system', message:`${user} is knocked out of the round by a Knight!`});
      } else {
        state.chat.push({username: 'system', message:`A knight is played - neither side has an advantage!`});
      }
      break;
    case 'Clown': // Look at target players hand. Can see prop is rendered in OpponenetsHand.jsx
      state.currentRound.activeHands[user].canSee = move.target;
      state.chat.push({username: 'system', message:`A clown is played - someones hand is visible!`});
      break;
    case 'Soldier': // Choose a card type other than Soldier. If target player has card, they are out
      if(state.currentRound.activeHands[move.target].hand[0].card === move.guess) {
        state.currentRound.discardPile.push(...state.currentRound.activeHands[move.target].hand);
        delete state.currentRound.activeHands[move.target];
        state.chat.push({username: 'system', message:`${user}'s Soldier strikes ${move.target} with a fatal blow!`});
      } else {
        state.chat.push({username: 'system', message:`${user}'s Soldier misses their mark!`});
      }
      break;
    default:
  }
}

// Find the next active player and draw a card into their hand
function processDraw(state) {
  // If deck is empty after a move, end round
  state.currentRound.turnNumber += 1;
  state.message = null;
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
  // check if new player has drawn over 12 with a minister, if so we kick them
  if (state.currentRound.activeHands[nextPlayer].value >= 12 && (state.currentRound.activeHands[nextPlayer].hand[0].card === 'Minister' || state.currentRound.activeHands[nextPlayer].hand[1].card === 'Minister')) {
    state.currentRound.discardPile.push(...state.currentRound.activeHands[nextPlayer].hand);
    delete state.currentRound.activeHands[nextPlayer];
  }

  if (Object.keys(state.currentRound.activeHands).length === 1) {
    endRound(state);
  }
}

// increment round counter, scoreboard, and check for 4 wins
// re-shuffle deck, re-deal
function endRound(state) {
  // determine winner
  const activePlayers = Object.keys(state.currentRound.activeHands);
  let winner = activePlayers[0];
  let highestHand = state.currentRound.activeHands[activePlayers[0]];
  for (let i = 1; i < activePlayers.length; i+= 1) {
    if (state.currentRound.activeHands[activePlayers[i]].value > highestHand.value) {
      highestHand = state.currentRound.activeHands[activePlayers[i]];
      winner = activePlayers[i];
    }
  }

  state.roundWins[winner] += 1;
  state.markModified('roundWins');
  if (state.roundWins[winner] === 4) { // end the game
    state.message = `${winner} has won the game!`;
    state.state = 'ended';
    state.markModified('state');
  } else {// end the round
    state.chat.push(`${winner} has won the round!`);
    module.exports.nextRound(state);
    // shuffle deck, reset hands,  increment round counter, re-deal
  }
}

module.exports.nextRound = (state) => {
  state.markModified('currentRound');
  state.markModified('roundWins');
  state.currentRound.roundNumber += 1;
  state.currentRound.turnNumber = 1;
  state.currentRound.currentPlayer = state.host.username;
  const newDeck = shuffleDeck();
  state.currentRound.faceDownCard = newDeck.pop();
  state.currentRound.deck = newDeck;
  state.currentRound.discardPile = [];
  state.roundWins = state.roundWins || {};
  let newHands = {};
  for (let i = 0; i < state.players.length; i+= 1) {
    const card = state.currentRound.deck.pop();
    newHands[state.players[i].username] = {
      hand: [card],
      value: card.value,
      targetable: true,
    }
    state.roundWins[state.players[i].username] = state.roundWins[state.players[i].username] || 0;
  }
  state.currentRound.activeHands = newHands;
  // shuffle deck, reset hands,  increment round counter, re-deal
  function shuffleDeck() {
    const deck = fullDeck.slice();

    function shuffle(array) {
      let currentIndex = array.length;
      let randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }

      return array;
    }

    return shuffle(deck);
  }
}
