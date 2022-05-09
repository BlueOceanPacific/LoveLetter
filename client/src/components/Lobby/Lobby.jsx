import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
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

  const populatePlayers = () => players.map((player) => (
    <li className="list-group-item">
      <img src="https://bit.ly/3sGYwz5" className="lobby-icon" alt="icon"/>
      {player}
    </li>
  ));

  return (
    <div className="lobby-container">
          <Navbar />
      {/* <div className="lobby-title-container">
        <h3>...waiting for other players</h3>
      </div> */}
      <div className="lobby-player-list-container">
        <h4 className="lobby-player-list-title">Current Players</h4>
        <ul className="lobby-list-group">
          {populatePlayers()}
        </ul>
      </div>
      <div className="lobby-chat">
        <h4>lobby chat</h4>
      </div>
      <button type="button" className="lobby-btn-leave btn-primary btn-lg">Leave Lobby</button>
      {createStartGameButton()}
    </div>
  );
}

export default Lobby;
