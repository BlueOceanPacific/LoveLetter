import React from 'react';

function LocalLeaderboardRow({ i, player }) {
  // only display the top 4 players
  if (i > 4) return null;
  return (
    <tr>
      <th scope="row">{i}</th>
      <td>{player.player}</td>
      <td>{player.score}</td>
      <td>{player.winRatio}</td>
    </tr>
  );
}

export default LocalLeaderboardRow;
