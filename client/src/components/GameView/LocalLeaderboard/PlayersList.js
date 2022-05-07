import React from 'react';

const data = require('./db');

function PlayersList() {
  return (
    <div className="col">
      <h6 id="local-leaderboard-txt">Player</h6>
      {data.map((obj, index) => (
        <div
          className="text-justify"
          key={JSON.stringify(obj.player + index)}
        >
          {obj.player}
        </div>
      ))}
    </div>
  );
}

export default PlayersList;
