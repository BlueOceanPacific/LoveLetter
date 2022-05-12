/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
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
import GameOver from '../GameOver/GameOver';

import './GameView.scss';
import useStore from '../Store/store';

function GameView() {
  const { game, setGame } = useStore(state => ({ game: state.game, setGame: state.setGame }));
  const { socket, setSocket } = useStore(state => ({ socket: state.socket, setSocket: state.setSocket }));
  const { id } = useParams();


  useEffect(() => {
    if (!game.currentRound.activeHands) {
      console.log('No active hands found!')
      axios.get(`/games/${id}`).then(({ data }) => {
        console.log('Setting data to: ', data)
        setGame(data);
      });
    }
    socket.on('updateGameState', () => {
      console.log('updatedGame - new state');
      axios.get(`/games/${id}`).then(({ data }) => {
        setGame(data);
      });
    });
  }, []);


  if (!game.currentRound.activeHands) return <LoadingSpinner />;

  return (
    <div className="bg-gradient gameview">
      {(game.state === 'playing') && <GameOver winningMessage={game.message} />} {/* -- not a great way to test this at the moment until we can complete a game -- */}
      <div className="row justify-content-between align-items-center top-row">
        <div className="col-3 leaderboard">
          {game ? <LocalLeaderboard /> : <LoadingSpinner />}
        </div>
        <div className="col">
          <div className="row justify-content-center">
            <div className="col-3 hand">
              {/** ******************* OpponentsHand.jsx ************************** */}
              {game ? (
                <OpponentsHand player={game.players[1]} />
              ) : (
                <LoadingSpinner />
              )}
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
          {game ? <Chat /> : <LoadingSpinner />}
        </div>
        <div className="col">
          <div className="row justify-content-between align-items-center">
            <div className="col">
              <div className="row justify-content-evenly">
                <div className="col-3 hand">
                  {/** ******************* OpponentsHand.jsx ************************** */}
                  {game.players.length > 2 ? (
                    <OpponentsHand player={game.players[2]} />
                  ) : null}
                </div>
                <div className="col-3 hand">
                  {/** ******************* OpponentsHand.jsx ************************** */}
                  {game.players.length > 3 ? (
                    <OpponentsHand player={game.players[3]} />
                  ) : null}
                </div>
              </div>
            </div>
            <div className="col-4 discard-pile">
              {/** ******************* DiscardPile.jsx ************************** */}
              {game ? <DiscardPile /> : <LoadingSpinner />}
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
