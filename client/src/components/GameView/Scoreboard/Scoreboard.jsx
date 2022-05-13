import React from 'react';
import useStore from '../../Store/store';
import './Scoreboard.scss';

function Scoreboard() {
  const { game } = useStore(state => ({ game: state.game }));
  const { roundWins } = game;

  const playerStats = Object.entries(roundWins);

  return (
    <div className="scoreboard">
      <h6>Scoreboard</h6>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Total Wins</th>
          </tr>
        </thead>
        <tbody>
          {playerStats.map((player) => (
            <tr key={JSON.stringify(player)}>
              <td>{player[0]}</td>
              <td>{player[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Scoreboard;
