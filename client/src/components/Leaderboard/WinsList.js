import React from 'react';

const data = require('./db');

function WinsList() {
  return (
    <div className="col">
      <h6>Total Wins</h6>
      {data.map((obj, index) => (
        <div
          className="text-justify"
          key={JSON.stringify(obj.score + index)}
        >
          {obj.score}
        </div>
      ))}
    </div>
  );
}

export default WinsList;
