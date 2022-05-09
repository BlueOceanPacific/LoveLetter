import React from 'react';

function ScoreboardRow({ i, player, lapsedRounds }) {
  return (
    <tr>
      <th scope="row">{i}</th>
      <td>{player.player}</td>
      <td>{player.roundWins}</td>
      <td>{`${(player.roundWins / lapsedRounds) * 100}%`}</td>
    </tr>
  );
}

export default ScoreboardRow;
