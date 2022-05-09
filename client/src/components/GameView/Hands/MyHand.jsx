import React, { useState } from 'react';
import Clown from '../Cards/Clown';
import Priestess from '../Cards/Minister';
import PlayingCard from '../Cards/PlayingCard';
import Soldier from '../Cards/Soldier';
import Wizard from '../Cards/Wizard';
import Knight from '../Cards/Knight';
import Liege from '../Cards/Liege';
import General from '../Cards/General';
import Minister from '../Cards/Minister';

function MyHand({ game }) {
  const [target, setTarget] = useState();
  const [cardType, setCardType] = useState();

  const targetChangeHandler = (val) => setTarget(val);
  const cardTypeChangeHandler = (val) => setCardType(val);

  const cards = game && {
    Clown: (<Clown players={game.players} target={target} targetChangeHandler={targetChangeHandler} />),
    Soldier: <Soldier
      players={game.players}
      target={target}
      targetChangeHandler={targetChangeHandler}
      cardType={cardType}
      cardTypeChangeHandler={cardTypeChangeHandler} />,
    Knight: <Knight players={game.players} />,
    Priestess: <Priestess />,
    Wizard: <Wizard players={game.players} />,
    General: <General players={game.players} />,
    Minister: <Minister />,
    Liege: <Liege />
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
