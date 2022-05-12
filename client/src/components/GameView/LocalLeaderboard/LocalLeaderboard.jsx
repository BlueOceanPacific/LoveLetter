import React, { useState, useEffect } from 'react';
import useStore from '../../Store/store';
import axios from 'axios';

export default function LocalLeaderboard() {
  const [playerArray, setplayerArray] = useState([]);

  const { game } = useStore(state => ({ game: state.game }));
  const { players } = game;
  console.log(players); // DELETE ME

  const playerPromises = [];

  for (let i = 0; i < players.length; i += 1) {
    const { username } = players[i];
    playerPromises.push(axios.get(`/user/profile/${username}`));
  }

  Promise.all(playerPromises)
    .then((result) => console.log('promise all is working ', result))
    .catch((err) => console.log(err));

  return (
    <div className="container"> Local Leaderboard </div>
  );
}

// import LocalLeaderboardRow from './LocalLeaderboardRow';

// import './LocalLeaderboard.scss';

// import players from './db';

// function LocalLeaderboard() {
//   return (
//     <div className="card leaderboard">
//       <div className="card-header local-leaderboard-title">Leaderboard</div>
//       <div className="card-body" style={{ padding: 0 }}>
//         <table className="table table-sm table-warning">
//           <thead>
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Player</th>
//               <th scope="col">Total Wins</th>
//               <th scope="col">Wins %</th>
//             </tr>
//           </thead>
//           <tbody>
//             {players
//               .sort((a, b) => b.score - a.score)
//               .map((player, i) => (
//                 <LocalLeaderboardRow
//                   key={player.player}
//                   i={i + 1}
//                   player={player}
//                 />
//               ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default LocalLeaderboard;
