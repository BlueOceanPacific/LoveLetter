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
  const [game, setGame] = useState();

  useEffect(() => {
    axios.get('/games/12345').then(({ data }) => {
      setGame(data);
    });
  }, []);

  const style = { height: '100vh', width: '100vw' };
  return (
    <div style={style} className="gameview container">
      <div className="row justify-content-between align-items-center top-row">
        <div className="col-3 leaderboard">
          <LocalLeaderboard />
        </div>
        <div className="col">
          <div className="row justify-content-center">
            <div className="col-3 hand">
              <OpponentsHand />
            </div>
          </div>
        </div>
        <div className="col-3 card-count">
          <CardCount />
        </div>
      </div>
      <div className="row bottom-row">
        <div className="col-3 chat">Chat</div>
        <div className="col">
          <div className="row justify-content-between align-items-center">
            <div className="col">
              <div className="row justify-content-evenly">
                <div className="col-3 hand">
                  <OpponentsHand />
                </div>
                <div className="col-3 hand">
                  <OpponentsHand />
                </div>
              </div>
            </div>
            <div className="col-4 rules">
              <Rules />
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col">
              <div className="row justify-content-center">
                <div className="col-5 my-hand">
                  <MyHand />
                </div>
              </div>
            </div>
            <div className="col-4 gy-3 scoreboard">
              <Scoreboard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameView;
