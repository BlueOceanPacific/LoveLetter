import React, { useState, useEffect } from 'react';

function Clown({ players, targetChangeHandler }) {
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

export default Clown;
