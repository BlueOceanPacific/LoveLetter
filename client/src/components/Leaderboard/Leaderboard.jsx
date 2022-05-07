import React from 'react';
import './Leaderboard.scss';
import PlayersList from './PlayersList';
import WinsList from './WinsList';
import AveragesList from './AveragesList';

function Leaderboard() {
  return (
    <div className="container">
      <h6>LEADER BOARD</h6>
      <div className="row">
        <PlayersList />
        <WinsList />
        <AveragesList />
      </div>
    </div>
  );
}

export default Leaderboard;
