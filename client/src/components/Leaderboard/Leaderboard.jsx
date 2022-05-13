import React, { useState, useEffect } from 'react';
import './Leaderboard.scss';
import axios from 'axios';

function Leaderboard() {
  const [users, setUsers] = useState(() => []);

  useEffect(() => {
    axios.get('/leaderboards')
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const inOrder = users;
  for (let i = 0; i < inOrder.length; i += 1) {
    const currentPlayer = inOrder[i];
    currentPlayer.percentage = (
      Math.round((100 * (currentPlayer.gamesWon / currentPlayer.gamesPlayed)))
    ) || 0;
  }
  inOrder.sort((a, b) => b.percentage - a.percentage);

  return (
    <div className="container" id="leaderboard">
      <h5>LEADERBOARD</h5>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Player</th>
            <th scope="col">Total Wins</th>
            <th scope="col">Win %</th>
          </tr>
        </thead>
        <tbody>
          {inOrder.map((obj, index) => (
            <tr key={JSON.stringify(obj)}>
              <td>{index + 1}</td>
              <td>{obj.username}</td>
              <td>{obj.gamesWon}</td>
              <td>
                {obj.percentage}
                %
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
