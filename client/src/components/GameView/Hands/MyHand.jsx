import React, { useState } from 'react';
import Clown from '../Cards/Clown';
import PlayingCard from '../Cards/PlayingCard';
import Soldier from '../Cards/Soldier';
import Wizard from '../Cards/Wizard';

function MyHand({ game }) {
  const [target, setTarget] = useState();
  const [cardType, setCardType] = useState();

  const targetChangeHandler = (event) => setTarget(event.target.value);
  const cardTypeChangeHandler = (val) => setCardType(val);

  const cards = {
    Clown: game ? (
      <Clown players={game.players} targetChangeHandler={targetChangeHandler} />
    ) : null,
    Soldier: game ? <Soldier players={game.players} /> : null,
  };

  return (
    <ul
      className="list-group list-group-horizontal my-hand"
      style={{ justifyContent: 'center' }}
    >
      {game &&
        game.currentRound.activeHands.twheeler.hand.map((card, i) => (
          <PlayingCard
            key={card.card}
            target={target}
            cardType={cardType}
            card={card}
          >
            {cards[card.card]}
          </PlayingCard>
        ))}
    </ul>
  );
}

export default MyHand;
