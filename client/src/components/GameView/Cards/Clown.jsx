import React, { useEffect } from 'react';

function Clown({ players, target, targetChangeHandler, showModal }) {
  useEffect(() => {
    showModal && targetChangeHandler(0);
  }, [showModal])

  return (
    <select
      className="form-select"
      aria-label="Choose a target player"
      value={target}
      onChange={({target}) => targetChangeHandler(target.value)}
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
  );
}

export default Clown;
