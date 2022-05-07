import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GameView.scss';

function GameView() {
  const style = { height: '100vh', width: '100vw' };
  return (
    <div style={style} className="gameview">
      <div className="text">hello world</div>
    </div>
  );
}

export default GameView;
