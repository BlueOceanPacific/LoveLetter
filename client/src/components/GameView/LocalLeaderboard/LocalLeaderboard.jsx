import React from 'react';
import LocalLeaderboardRow from './LocalLeaderboardRow';

import './LocalLeaderboard.scss';

import players from './db';

function LocalLeaderboard() {
  return (
    <div className="card leaderboard">
      <div className="card-header local-leaderboard-title">Leaderboard</div>
      <div className="card-body" style={{ padding: 0 }}>
        <table className="table table-sm table-warning">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Player</th>
              <th scope="col">Total Wins</th>
              <th scope="col">Wins %</th>
            </tr>
          </thead>
          <tbody>
            {players
              .sort((a, b) => b.score - a.score)
              .map((player, i) => (
                <LocalLeaderboardRow i={i + 1} player={player} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  return (
    <div className="leaderboard">
      <h5 className="title">Leaderboard</h5>
      <table className="table table-sm table-warning">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Player</th>
            <th scope="col">Total Wins</th>
            <th scope="col">Wins %</th>
          </tr>
        </thead>
        <tbody>
          {players
            .sort((a, b) => b.score - a.score)
            .map((player, i) => (
              <LocalLeaderboardRow i={i + 1} player={player} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default LocalLeaderboard;
