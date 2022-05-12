import React from 'react';
import './GameOver.scss';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Confetti from '../Confetti/Confetti';

function GameOver({ winningMessage }) {
  const navigate = useNavigate();
  if (winningMessage) {
    return (
      <div className="gameover-container">
        <Confetti />
        <div className="modal fade show" style={{ display: 'block' }} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">{winningMessage}</h5>
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
}

export default GameOver;
