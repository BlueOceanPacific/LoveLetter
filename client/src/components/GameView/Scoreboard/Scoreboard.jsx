import React, { useState, useEffect } from 'react';
import ScoreboardRow from './ScoreboardRow';

function Scoreboard({ game }) {
  const [scoreboardData, setScoreboardData] = useState([]);
  useEffect(() => {
    setScoreboardData(
      Object.entries(game.roundWins).map(([player, roundWins]) => ({
        player,
        roundWins,
      }))
    );
  }, []);
  return (
    <div className="card">
      <div className="card-header local-leaderboard-title">Scoreboard</div>
      <div className="card-body" style={{ padding: 0 }}>
        <table
          className="table table-sm table-warning"
          style={{ padding: 0, marginBottom: 0 }}
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Player</th>
              <th scope="col">Total Wins</th>
              <th scope="col">Wins %</th>
            </tr>
          </thead>
          <tbody>
            {scoreboardData.map((player) => (
              <ScoreboardRow
                key={player.player}
                player={player}
                lapsedRounds={game.currentRound.roundNumber - 1}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Scoreboard;
