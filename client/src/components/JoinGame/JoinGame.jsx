import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'regenerator-runtime/runtime'

function JoinGame() {
  // const [count, setCount] = useState(0);
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getGames = async () => {
      try {
        const res = await axios.get('/games');
        setGames(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getGames();
  }, games);

  const handleAutoJoin = () => {
    navigate(`/games/${games[0].id}`);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4">
          <div className="p-4" />
          <button type="button" className="btn btn-success btn-lg" onClick={handleAutoJoin}>Auto-Join</button>
        </div>
        <div className="col-sm-8"><div className="p-4"><h1>List of Open Games</h1></div></div>
      </div>

      <div className="row">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col" colSpan="1">Room</th>
              <th scope="col" colSpan="2">Current Number of Players</th>
              <th scope="col">Join</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr key={game.id}>
                <th scope="row">{game.name}</th>
                <td colSpan="2">
                  {game.currentPlayers}
                  /4
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => navigate(`/games/${game.id}`)}
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

// bootstrap

// <button type="button" class="btn btn-primary">Join Game</button>

// <button type="button" class="btn btn-primary">Create Game</button>

/*
function roomId(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charLength));
  }
  return result;
}

// const createRow = () => {
  //   const [expandedRows, setExandedRows]
  //   <tr>
  //     <th scope="row">{this.roomName}</th>
  //     <td colSpan="2">{count}/4</td>
  //     <td><button type="button" className="btn btn-primary btn-sm" onClick={incrementCount}>Join</button></td>
  //   </tr>
  // }
*/
