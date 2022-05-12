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
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const { game, setGame } = useStore((state) => ({ game: state.game, setGame: state.setGame }));
  const socket = useStore((state) => state.socket);
  const setSocket = useStore((state) => state.setSocket);
  const user = useStore((state) => state.user);

  useEffect(() => {
    axios
      .get(`/games/${id}`)
      .then(({ data }) => {
        console.log(data);
        setGame(data);
        setPlayers(data.players);
      })
      .catch((err) => console.log(err));

    setSocket(io('/play', { query: { id } }));
    if (socket) {
      socket.emit('join', user);
      socket.on('join', () => {
        console.log('someone connected');
      });
    }
    // axios
    //   .get(`/games/${id}`)
    //   .then(({ data }) => setGame(data) && console.log(data))
    //   .then((_) => setPlayers(game.players))
    //   .catch((err) => console.log(err));
  }, players.length);

  const startTheGame = () => {
    if (game) {
      axios.post(`/games/${game.name}/start`)
        .then((_) => navigate(`/play/game/${game.name}`))
    }
  }

  const leaveLobbyHandler = () => {
    // add logic to disconnect from socket io connection
    axios.post(`/games/${game.name}/leave`, { user: user.username })
      .then((_) => navigate('/'))
  };

  const populatePlayers = () => {
    return players.map((player) => (
      <li className="list-group-item" key={ player.id }>
        <img src={ player.avatar } className="lobby-icon" alt="icon" />
        { player.username }
      </li>
    ))
  }

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
        <ul className="lobby-list-group">
          {populatePlayers()}
        </ul>
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
        onClick={startTheGame}
        disabled={players.length < 2}
      >
        Start Game
      </button>
    </div>
  );
}

export default Lobby;

/*
//remove a player if leave lobby
  app.post("/games/:name/leave", (req, res) => {
    //Search for the game, confirm it has less than 4 players
    Game.updateOne({ name: req.params.name }).exec()
    .then((game) => {
      console.log(req.body.user);
      let index = game.players.indexOf(req.body.user)
      game.players.splice(index, 1)
      game.markModified('players');
      game.save()
        .then(() => res.sendStatus(201))
        .catch(()=> res.sendStatus(500));
    })
    .catch(() => res.sendStatus(500));
  });

*/
