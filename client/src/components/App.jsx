/* eslint-disable import/extensions */
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Chat from './Chat/Chat';
import CreateGame from './CreateGame/CreateGame';
import GameView from './GameView/GameView';
import JoinGame from './JoinGame/JoinGame';
import Leaderboard from './Leaderboard/Leaderboard';
import Lobby from './Lobby/Lobby';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import AuthWrapper from './Auth/AuthWrapper';
import AuthTest from './Auth/AuthTest';
import UserProfile from './UserProfile/UserProfile';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/chat" element={'DEPRECATED: Chat component can only be rendered in Game'} />
        <Route path="/create" element={<CreateGame />} />
        <Route path="/play/game/:id" element={<GameView />} />
        <Route path="/join" element={<JoinGame />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/play/lobby/:id" element={<Lobby />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/authcheck"
          element={
            <AuthWrapper>
              <AuthTest />
            </AuthWrapper>
          }
        />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;
