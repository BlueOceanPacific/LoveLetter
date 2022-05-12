// 1. package imports
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import io from 'socket.io-client';
// 2. component imports
import useStore from '../Store/store';
import GameView from '../GameView/GameView';
import Chat from '../Chat/Chat';
import LoadingSpinner from '../../util/LoadingSpinner';
// 3. css
import './Lobby.scss';

function Lobby() {
  const [players, setPlayers] = useState(['twheeler', 'lcosta', 'mteran']);
  const navigate = useNavigate();
  const { id } = useParams();
  const { game, setGame } = useStore((state) => ({ game: state.game, setGame: state.setGame }));
  const socket = useStore((state) => state.socket);
  const setSocket = useStore((state) => state.setSocket);
  const user = useStore((state) => state.user);

  useEffect(() => {
    setSocket(io('/play', { query: { id } }));
    if (socket) {
      socket.emit('join', user);
      socket.on('join', () => {
        console.log('someone connected');
      });
    }
    axios
      .get(`/games/${id}`)
      .then(({ data }) => setGame(data))
      .catch((err) => console.log(err));
  }, []);

  const leaveLobbyHandler = () => {
    // add logic to disconnect from socket io connection
    navigate('/');
  };

  const populatePlayers = () =>
    players.map((player) => (
      <li className="list-group-item" key={player}>
        <img src="https://bit.ly/3sGYwz5" className="lobby-icon" alt="icon" />
        {player}
      </li>
    ));

  if (!game) return <LoadingSpinner />;

  if (game.state === 'playing') {
    navigate(`/play/game/${id}`);
  }

  return (
    <div className="lobby-container">
      {/* <div className="lobby-title-container">
        <h3>...waiting for other players</h3>
      </div> */}
      <div className="lobby-player-list-container">
        <h4 className="lobby-player-list-title">Current Players</h4>
        <ul className="lobby-list-group">{populatePlayers()}</ul>
      </div>
      <div className="chat-container">
        <Chat socket={socket} />
      </div>
      <button
        type="button"
        className="lobby-btn-leave btn-primary btn-lg"
        onClick={leaveLobbyHandler}
      >
        Leave Lobby
      </button>
      <button
        type="button"
        className="lobby-btn-start btn-primary btn-lg"
        disabled={players.length < 2}
      >
        Start Game
      </button>
      ;
    </div>
  );
}

export default Lobby;
