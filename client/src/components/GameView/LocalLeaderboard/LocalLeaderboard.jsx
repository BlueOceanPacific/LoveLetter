import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useStore from '../../Store/store';
import './LocalLeaderboard.scss';

export default function LocalLeaderboard() {
  const [playerArray, setplayerArray] = useState([]);

  const { game } = useStore(state => ({ game: state.game }));
  const { players } = game;

  const playerPromises = [];

  for (let i = 0; i < players.length; i += 1) {
    const { username } = players[i];
    playerPromises.push(axios.get(`/user/profile/${username}`));
  }

  Promise.all(playerPromises)
    .then((result) => setplayerArray(result.data))
    .catch((err) => console.log(err));

  // --------------------- Map this data when server sends 404 -------------------------
  const [users, setUsers] = useState(() => []);

  useEffect(() => {
    axios.get('/leaderboards')
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // --------------------- Map this data when server sends 404 -------------------------

  let inOrder = users;
  if (Array.isArray(playerArray) && playerArray.length > 1) inOrder = playerArray;
  for (let i = 0; i < inOrder.length; i += 1) {
    const currentPlayer = inOrder[i];
    currentPlayer.percentage = (
      Math.round((100 * (currentPlayer.gamesWon / currentPlayer.gamesPlayed)))
    ) || 0;
  }
  inOrder.sort((a, b) => b.percentage - a.percentage);

  return (
    <div className="local-leaderboard">
      <h6>Local Leaderboard</h6>
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
