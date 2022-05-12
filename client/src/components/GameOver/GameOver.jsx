import React from 'react';
import './GameOver.scss';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

function GameOver({ winner }) {
  const navigate = useNavigate();

  // 2 lines below are only for testing
  // game = game || { state: 'notplaying' };
  // winner = winner || 'Player X';


  // this line needs to be inserted into the conditional below when game state is being used here from Zustand store
  // game.state !== 'playing'
  return (
    <div className="gameover-container">
      <div className="modal fade show" style={{ display: 'block' }} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">{winner} wins!</h5>
            </div>
            <div className="modal-body">
              INSERT END GAME IMG HERE
              <img src=""></img>
            </div>
            <div className="modal-footer">
              <button onClick={() => navigate('/')}
                type="button" className="btn btn-primary">Return to Homepage</button>
            </div>
          </div>
        </div>
      </div>
      <div className='modal-background' />
    </div>
  );
}

export default GameOver;
