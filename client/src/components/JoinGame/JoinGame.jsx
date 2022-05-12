import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'regenerator-runtime/runtime';
import io from 'socket.io-client';
import useStore from '../Store/store';

function JoinGame() {
  const [games, setGames] = useState([]);
  // const [socket, setSocket] = useState(io('/play', /*{ query: { id } }*/));
  const user = useStore((state) => state.user);
  const navigate = useNavigate();


  const updateGames = () => {
    // can be refactored to listen on a socket
    axios
    .get('/games')
    .then(({ data }) => setGames(data))
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    updateGames();
  }, []);
  // socket.emit - This method is responsible for sending messages. socket.on - This method is responsible for listening for incoming messages.

  const handleJoin = (gameName = games[0].name) => {
    axios.post(`/games/${gameName}/join`, {user})
      .then(() => navigate(`/play/lobby/${gameName}`))
      .catch(() => {
        alert('Game is full, try another!'); // Could be updated as a tool tip
        updateGames();
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4">
          <div className="p-2" />
          <button type="button" className="btn btn-success btn-lg" onClick={handleJoin}>Auto-Join</button>
        </div>
        <div className="col-sm-8"><div className="p-4"><h1>Join a Game</h1></div></div>
      </div>

      <div className="row">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col" colSpan="1">Available Games</th>
              <th scope="col" colSpan="2">Player Count</th>
              <th scope="col">Join</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr key={game._id}>
                <th scope="row">{game.name}</th>
                <td colSpan="2">
                  {game.players.length}
                  {' '}
                  /
                  {' '}
                  4
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => handleJoin(game.name)}
                  >
                    Join
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default JoinGame;

/*
  useEffect(() => {
    const getGames = async () => {
      try {
        const res = await axios.get('/games');
        console.log('send get req: ', res);
        setGames(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getGames();
  }, []);
*/




