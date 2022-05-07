import React, { useState } from 'react';
import './Lobby.scss';

function Lobby() {
  const [players, setPlayers] = useState(['twheeler', 'lcosta', 'mteran']);

  // useEffect(() => {

  // }, []);

  const createStartGameButton = () => {
    let buttons = <button type="button" className="lobby-btn-start btn-primary btn-lg">Start Game</button>;
    if (players.length < 2) {
      buttons = <button type="button" className="lobby-btn-start btn-primary btn-lg" disabled>Start Game</button>;
    }

    return buttons;
  };

  return (
    <div className="lobby-container">
      <div className="lobby-title-container">
        <h3>...waiting for other players</h3>
      </div>
      <div className="lobby-player-list-container">
        <h4>Current Players</h4>
        <ul className="lobby-list-group">
          {players.map((player) => <li className="list-group-item">{player}</li>)}
        </ul>
      </div>
      <button type="button" className="lobby-btn-leave btn-primary btn-lg">Leave Lobby</button>
      {createStartGameButton()}
    </div>
  );
}

export default Lobby;
