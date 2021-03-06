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
// ? 4. Video chat component;
import VideoChat from "../VideoChat/VideoChat";

function Lobby() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const { game, setGame } = useStore((state) => ({
    game: state.game,
    setGame: state.setGame,
  }));
  const socket = useStore((state) => state.socket);
  const setSocket = useStore((state) => state.setSocket);
  const user = useStore((state) => state.user);

  useEffect(() => {
    axios
      .get(`/games/${id}`)
      .then(({ data }) => {
        setGame(data);
        setPlayers(data.players);
      })
      .catch((err) => console.log(err));
    setSocket(io('/play', { query: { id } }));
  }, []);

  useEffect(() => {
    if (socket) {
      if (!players.map((player) => player.username).includes(user.username)) {
        socket.emit('lobbyUpdate');
      }
      socket.on('lobbyUpdate', () => {
        axios
          .get(`/games/${id}`)
          .then(({ data }) => {
            setGame(data);
            setPlayers(data.players);
            if (data.state === 'playing') {
              navigate(`/play/game/${game.name}`);
            }
          })
          .catch((err) => console.log(err));
      });
    }
  }, [socket]);

  const startTheGame = () => {
    if (game) {
      axios.post(`/games/${game.name}/start`).then(() => {
        socket.emit('lobbyUpdate');
        navigate(`/play/game/${game.name}`);
      });
    }
  };

  const leaveLobbyHandler = () => {
    // add logic to disconnect from socket io connection
    axios.post(`/games/${game.name}/leave`, { user: user.username });
    // .then((_) => navigate('/'))
    navigate('/');
  };

  const populatePlayers = () =>
    players.map((player) => (
      <li className="list-group-item" key={player.username}>
        <img src={player.avatar} className="lobby-icon" alt="icon" />
        {player.username}
      </li>
    ));

  if (!game) return <LoadingSpinner />;

  if (game.state !== 'building') {
    navigate(`/play/game/${id}`);
  }

  return (
    <div className="lobby-container">
      <div className="lobby-player-list-container">
        <h4 className="lobby-player-list-title">Current Players</h4>
        <ul className="lobby-list-group">{populatePlayers()}</ul>
      </div>
      <div className=""><VideoChat /></div>
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
        onClick={startTheGame}
        disabled={players.length < 2}
      >
        Start Game
      </button>
    </div>
  );
}

export default Lobby;
