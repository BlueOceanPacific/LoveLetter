/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import useStore from '../../Store/store';
import Clown from '../Cards/Clown';
import Priestess from '../Cards/Priestess';
import PlayingCard from '../Cards/PlayingCard';
import Soldier from '../Cards/Soldier';
import Wizard from '../Cards/Wizard';
import Knight from '../Cards/Knight';
import Liege from '../Cards/Liege';
import General from '../Cards/General';
import Minister from '../Cards/Minister';

function MyHand({ game, socket }) {
  const [target, setTarget] = useState();
  const [cardType, setCardType] = useState();
  const user = useStore((state) => state.user);

  const targetChangeHandler = (val) => setTarget(val);
  const cardTypeChangeHandler = (val) => setCardType(val);

  const cards = game && {
    Clown: (
      <Clown
        socket={socket}
        game={game}
        target={target}
        targetChangeHandler={targetChangeHandler}
      />
    ),
    Soldier: (
      <Soldier
        socket={socket}
        game={game}
        target={target}
        targetChangeHandler={targetChangeHandler}
        cardType={cardType}
        cardTypeChangeHandler={cardTypeChangeHandler}
      />
    ),
    Knight: (
      <Knight
        socket={socket}
        game={game}
        target={target}
        targetChangeHandler={targetChangeHandler}
      />
    ),
    Priestess: <Priestess socket={socket} game={game} />,
    Wizard: (
      <Wizard
        socket={socket}
        game={game}
        target={target}
        targetChangeHandler={targetChangeHandler}
      />
    ),
    General: (
      <General
        socket={socket}
        game={game}
        target={target}
        targetChangeHandler={targetChangeHandler}
      />
    ),
    Minister: <Minister socket={socket} game={game} />,
    Liege: <Liege socket={socket} game={game} />,
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
