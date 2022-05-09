import React, { useEffect } from 'react';
import CARD_TYPES from '../../../util/card-types';

function Wizard({
  players,
  target,
  targetChangeHandler,
  cardType,
  cardTypeChangeHandler,
  showModal,
}) {
  useEffect(() => {
    showModal && targetChangeHandler("0");
    showModal && cardTypeChangeHandler("0");
  }, [showModal]);

  return (
    <>
      <select
        className="form-select"
        aria-label="Choose a Target Player"
        value={target}
        onChange={({ target }) => targetChangeHandler(target.value)}
      >
        <option defaultValue value={"0"}>
          Choose a target player
        </option>
        {players.map(({ username }) => (
          <option key={username} value={username}>
            {username}
          </option>
        ))}
      </select>
      <select
        className="form-select"
        aria-label="Choose a Card Type"
        value={cardType}
        onChange={({ target }) => cardTypeChangeHandler(target.value)}
      >
        <option defaultValue value={"0"}>
          Choose a Card Type
        </option>
        {CARD_TYPES.map(({ name, value }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
    </>
  );
}

export default Wizard;
