import React from 'react';
import Card from '../Cards/Card';

function OpponentsHand() {
  return (
    <ul className="list-group list-group-horizontal hand">
      <Card currentCard="/images/cards/BackCard.png" />
      <Card currentCard="/images/cards/BackCard.png" />
    </ul>
  );
}

export default OpponentsHand;
