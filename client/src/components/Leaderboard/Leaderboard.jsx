import React from 'react';
import './Leaderboard.scss';
import PlayersList from './PlayersList';
import WinsList from './WinsList';
import AveragesList from './AveragesList';

function Leaderboard() {
  return (
    <div className="container" id="leaderboard">
      <h6>LEADER BOARD</h6>
      <div className="row">
        <PlayersList />
        <WinsList />
        <AveragesList />
        <button
          type="button"
          className="btn"
          id="exit-leaderboard-btn"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Leaderboard;
