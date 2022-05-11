/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Chat from '../Chat/Chat';
import OpponentsHand from './Hands/OpponentsHand';
import MyHand from './Hands/MyHand';
import Rules from './Rules/Rules';
import Scoreboard from './Scoreboard/Scoreboard';
import LocalLeaderboard from './LocalLeaderboard/LocalLeaderboard';
import DiscardPile from './DiscardPile/DiscardPile';
import LoadingSpinner from '../../util/LoadingSpinner';

import './GameView.scss';

function GameView({ socket }) {
  const [game, setGame] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/games/${id}`).then(({ data }) => {
      // console.log(game);
      setGame(data);
    });
  }, []);

  useEffect(() => {
    socket.on('updateGameState', (updatedGame) => {
      setGame(updatedGame);
    });
  }, []);

  if (!game) return <LoadingSpinner />

  return (
    <div className="bg-gradient gameview">
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
          {/** ******************* Chat.jsx ************************** */}
          <div className="col-3 chat" style={{ backgroundColor: 'white' }}>
            <Chat socket={socket} />
          </div>
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
              <div className="col-4 discard-pile">
                {/** ******************* DiscardPile.jsx ************************** */}
                <DiscardPile game={game} />
              </div>
            </div>
            <div className="row justify-content-between align-items-center">
              <div className="col">
                <div className="row justify-content-center">
                  <div className="col-5 my-hand">
                    {/** ******************* MyHand.jsx ************************** */}
                    {game && <MyHand game={game} socket={socket} />}
                  </div>
                </div>
              </div>
              <div
                className="col-4 gy-3 rules"
                style={{
                  alignSelf: 'flex-end',
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '5%',
                }}
              >
                {/** ******************** Rules.jsx *************************** */}
                <Rules />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default GameView;
