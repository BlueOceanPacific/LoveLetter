/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

function Wizard({ game, target, targetChangeHandler, showModal }) {
  useEffect(() => {
    showModal && targetChangeHandler("0");
  }, [showModal])

  return (
    <select
      className="form-select"
      aria-label="Choose a target player"
      value={target}
      onChange={({target}) => targetChangeHandler(target.value)}
    >
      <option defaultValue value="0">
        Choose a target player
      </option>
      {game.players.map(({ username }) => (
        <option key={username} value={username}>
          {username}
        </option>
      ))}
    </select>
  );
}

export default Wizard;
