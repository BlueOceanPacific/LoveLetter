import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import OpponentsHand from './Hands/OpponentsHand';
import MyHand from './Hands/MyHand';
import Rules from './Rules/Rules';
import Scoreboard from './Scoreboard/Scoreboard';
import LocalLeaderboard from './LocalLeaderboard/LocalLeaderboard';
import CardCount from './CardCount/CardCount';

import './GameView.scss';

function GameView() {
  const [game, setGame] = useState(null);

  useEffect(() => {
    axios.get('/games/12345').then(({ data }) => {
      setGame(data);
    });
  }, []);

  const style = { height: '100vh', width: '100vw' };
  return (
    <>
      <div className="modal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={style} className="bg-light gameview">
        <div className="row justify-content-between align-items-center top-row">
          <div className="col-3 leaderboard">
            {/** ******************* LocalLeaderboard.jsx ************************** */}
            <LocalLeaderboard />
          </div>
          <div className="col">
            <div className="row justify-content-center">
              <div className="col-3 hand">
                {/** ******************* OpponentsHand.jsx ************************** */}
                <OpponentsHand />
              </div>
            </div>
          </div>
          <div className="col-3">
            {/** ******************* Scoreboard.jsx ************************** */}
            {game ? <Scoreboard game={game} /> : <div>Loading...</div>}
          </div>
        </div>
        <div className="row bottom-row">
          <div className="col-3 chat">Chat</div>
          <div className="col">
            <div className="row justify-content-between align-items-center">
              <div className="col">
                <div className="row justify-content-evenly">
                  <div className="col-3 hand">
                    {/** ******************* OpponentsHand.jsx ************************** */}
                    <OpponentsHand />
                  </div>
                  <div className="col-3 hand">
                    {/** ******************* OpponentsHand.jsx ************************** */}
                    <OpponentsHand />
                  </div>
                </div>
              </div>
              <div className="col-4 card-count">
                {/** ******************* CardCount.jsx ************************** */}
                <CardCount />
              </div>
            </div>
            <div className="row justify-content-between align-items-center">
              <div className="col">
                <div className="row justify-content-center">
                  <div className="col-5 my-hand">
                    {/** ******************* MyHand.jsx ************************** */}
                    <MyHand />
                  </div>
                </div>
              </div>
              <div className="col-4 gy-3 rules">
                {/** ******************** Rules.jsx *************************** */}
                <Rules />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameView;
