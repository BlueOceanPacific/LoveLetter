import React from 'react';
import './LocalLeaderboard.scss';
import PlayersList from './PlayersList';
import WinsList from './WinsList';
import AveragesList from './AveragesList';

function LocalLeaderboard() {
  return (
    <div className="leaderboard-component">
      <h6 id="local-leaderboard-txt">LOCAL LEADERBOARD</h6>
      <div className="row">
        <PlayersList />
        <WinsList />
        <AveragesList />
      </div>
    </div>
  );
}

export default LocalLeaderboard;
