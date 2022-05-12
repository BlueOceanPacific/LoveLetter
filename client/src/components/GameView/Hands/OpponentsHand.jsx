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
  return (
    <ul className="list-group list-group-horizontal hand" style={game.currentRound.currentPlayer === player.username ? styles : null}>
      <Card currentCard="/images/cards/BackCard.png" />
      <Card currentCard="/images/cards/BackCard.png" />
    </ul>
  );
}

export default OpponentsHand;
