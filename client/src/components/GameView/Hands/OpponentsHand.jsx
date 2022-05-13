import React from 'react';
import useStore from '../../Store/store';
import Card from '../Cards/Card';

function OpponentsHand({ player }) {
  const { game, user } = useStore((state) => ({
    game: state.game,
    user: state.user,
  }));

  const styles = {
    boxShadow: `0 0 1.5rem #ffe100`,
  };

  let card;
  console.log('In ops hand, player: ', player, ', user.username: ', user)
  if (!game.currentRound.activeHands[player.username]) {  // If they are out of the round, don't display any cards
    card = null;
  } else if (game.currentRound.activeHands[user.username].canSee === player.username ) { // If they are in the round and the user has played a clown card on them, show their card
    card = <Card currentCard={game.currentRound.activeHands[player.username].hand[0].image} />;
  } else { // Otherwise, show the back of a card
    card = <Card currentCard="/images/cards/BackCard.png" />;
  }
  return (
    <ul className="list-group list-group-horizontal hand" style={game.currentRound.currentPlayer === player.username ? styles : null}>
      {card}
    </ul>
  );
}

export default OpponentsHand;
