import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Chat from '../Chat/Chat';
import './Lobby.scss';

function Lobby() {
  const [players, setPlayers] = useState(['twheeler', 'lcosta', 'mteran']);
  const navigate = useNavigate();

  // useEffect(() => {

  // }, []);

  const leaveLobbyHandler = () => {
    // add logic to disconnect from socket io connection
    navigate('/');
  };

  const populatePlayers = () => players.map((player) => (
    <li className="list-group-item" key={player}>
      <img src="https://bit.ly/3sGYwz5" className="lobby-icon" alt="icon"/>
      {player}
    </li>
  ));

  return (
    <div className="lobby-container">
      {/* <div className="lobby-title-container">
        <h3>...waiting for other players</h3>
      </div> */}
      <div className="lobby-player-list-container">
        <h4 className="lobby-player-list-title">Current Players</h4>
        <ul className="lobby-list-group">
          {populatePlayers()}
        </ul>
      </div>
      <div className="chat-wrapper">
        <div className="lobby-chat">
          {/* Socket IO logic needs to be updated so that chat can load in the lobby */}
          <Chat />  
        </div>
      </div>
      <button type="button" className="lobby-btn-leave btn-primary btn-lg" onClick={leaveLobbyHandler}>
        Leave Lobby
      </button>
      <button type="button" className="lobby-btn-start btn-primary btn-lg" disabled={players.length < 2}>Start Game</button>;
    </div>
  );
}

export default Lobby;
