const db = require('../../db');

//Questions:
// Single discard pile, or discard pile per player?
// Expectations on post (gameID, username, move: {card: {}, target (opt), cardguess(opt)})
module.exports.process = async (gameID, user, move) => {
  const currentState = await db.Game.find({'_id': gameID}).exec();
  //check to see if the round has ended (or round is beginning)
  // if yes, check to see if game has ended, handle ending the game
}


//updates state based on a given move
function updateState(state, user, move) {
  //add card from move to users discarded pile
  //remove card from move from users hand
  //check if any user is out of the round (discarded a prince / princess / liege), or holding a minister with value of hand 12 or higher
  //pre-process the draw of the next card for the next player, update their hand
      //check value of their hand if they have a minister card
  return state;
}


//discards a card from users hand, based on move
function discardCard(state, user, move) {
  return state;
}

//check if the round has ended
function checkRoundEnd(state) {
  //only one user remains, or the deck is out of cards
  return false;
}

//check if the round has ended
function checkGameEnd(state) {
  return false;
}

//ends a game
function endGame(state) {
  return true;
}

function processMove(state, user, move) {
  switch(move.card.card) {
    case ''
  }
}