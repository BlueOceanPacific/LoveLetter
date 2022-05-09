import React, { useState } from 'react';

function Wizard({ players }) {
  const [target, setTarget] = useState(0);

  const targetChangeHandler = (ev) => setTarget(ev.target.value);

  return (
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
  );
}

export default Wizard;
