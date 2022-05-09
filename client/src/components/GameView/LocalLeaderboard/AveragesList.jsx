import React from 'react';

const data = require('./db');

function AveragesList() {
  return (
    <div className="col">
      <h6 id="local-leaderboard-txt">Win %</h6>
      {data.map((obj, index) => (
        <div
          className="text-justify"
          key={JSON.stringify(obj.average + index)}
        >
          {obj.average}
          %
        </div>
      ))}
    </div>
  );
}

export default AveragesList;
