import React, { useState } from 'react';
import axios from 'axios';

function JoinGame() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count < 4) setCount(count + 1);
  };

  // const createRow = () => {
  //   const [expandedRows, setExandedRows]
  //   <tr>
  //     <th scope="row">{/*this.roomName*/}</th>
  //     <td colSpan="2">{count}/4</td>
  //     <td><button type="button" className="btn btn-primary btn-sm" onClick={incrementCount}>Join</button></td>
  //   </tr>
  // }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4">
          <div className="p-4" />
          <button type="button" className="btn btn-success btn-lg">Auto-Join</button>
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
            <tr>
              <th scope="row">Friends of Sir Dare the Fair (Url)</th>
              <td colSpan="2">
                {count}
                /4
              </td>
              <td><button type="button" className="btn btn-primary btn-sm" onClick={incrementCount}>Join</button></td>
            </tr>
            <tr>
              <th scope="row">Friends of Sir Dareitus the Fairitus (Url)</th>
              <td colSpan="2">
                {count}
                /4
              </td>
              <td><button type="button" className="btn btn-primary btn-sm" onClick={incrementCount}>Join</button></td>
            </tr>
            <tr>
              <th className="text-danger" scope="row">Stupid Peasants (BANNED)</th>
              <td colSpan="2">
                {count}
                /4
              </td>
              <td><button type="button" className="btn btn-primary btn-sm" onClick={incrementCount}>Join</button></td>
            </tr>
            {/* {createRow()} */}
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
*/
