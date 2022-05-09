import React, { useState } from 'react';

import CARD_TYPES from '../../../util/card-types';

function Soldier({ players }) {
  const [target, setTarget] = useState(0);
  const [cardType, setCardType] = useState(0);

  const playEffect = () => {
    console.log(target, cardType);
  };

  const targetChangeHandler = (ev) => setTarget(ev.target.value);
  const cardTypeChangeHandler = (ev) => setCardType(ev.target.value);

  return (
    <>
      <select
        className="form-select"
        aria-label="Select a card type"
        onChange={cardTypeChangeHandler}
      >
        <option defaultValue value={0}>
          Select a Card Type
        </option>
        {CARD_TYPES.map((card) => (
          <option key={card.value} value={card.value}>
            {card.name}
          </option>
        ))}
      </select>
      <select
        className="form-select"
        aria-label="Choose a target player"
        onChange={targetChangeHandler}
      >
        <option defaultValue value={0}>
          Choose a target player
        </option>
        {players.map(({ username }) => (
          <option key={username} value={username}>
            {username}
          </option>
        ))}
      </select>
    </>
  );
}

export default Soldier;
