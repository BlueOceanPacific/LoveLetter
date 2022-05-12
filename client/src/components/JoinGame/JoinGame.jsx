import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'regenerator-runtime/runtime';
// import io from 'socket.io-client';
// import useStore from '../Store/store';

function JoinGame() {
  const [games, setGames] = useState([]);
  // const [socket, setSocket] = useState(io('/play', { query: { id } }));
  // const user = useStore((state) => state.user);
  const navigate = useNavigate();

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

  /*
  useEffect(() => {
    socket.emit('join', user);
    socket.on('join', () => {
      console.log('someone connected');
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
    });
  }, []);

  // socket.emit - This method is responsible for sending messages. socket.on - This method is responsible for listening for incoming messages.
  */
  const handleAutoJoin = () => {
    navigate(`/play/lobby/${games[0].name}`);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4">
          <div className="p-2" />
          <button type="button" className="btn btn-success btn-lg" onClick={handleAutoJoin}>Auto-Join</button>
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
                    onClick={() => navigate(`/play/lobby/${game.name}`)}
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
//



