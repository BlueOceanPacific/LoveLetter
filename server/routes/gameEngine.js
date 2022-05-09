const db = require('../../db');

module.exports.process = (gameID, user, move) => {
  const currentState = await db.Game.find({'_id': gameID}).exec();
  //update state based on input move
  //remove card from users hand
  //place card in discard pile
  //check to see if the round has ended (or round is beginning)
  // if yes, check to see if game has ended, handle ending the game
}


//updates state based on a given move
function updateState(state, user, move) {
  return state;
}

//discards a card from users hand, based on move
function discardCard(state, user, move) {
  return state;
}

//check if the round has ended
function checkRoundEnd(state) {
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