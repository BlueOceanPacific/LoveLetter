import React from 'react';
import axios from 'axios';

function JoinGame() {
  return (
    <div classNane="container">
      <div className="row">
        <div className="col">Column One</div>
        <div className="col">Column Two </div>
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
