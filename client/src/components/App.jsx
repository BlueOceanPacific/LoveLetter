import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';

import Home from './Home.jsx';
import Chat from './Chat.jsx';
import CreateGame from './CreateGame.jsx';
import GameView from './GameView.jsx';
import JoinGame from './JoinGame.jsx';
import Leaderboard from './Leaderboard.jsx';
import Lobby from './Lobby.jsx';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/create" element={<CreateGame />} />
      <Route path="/game/:id" element={<GameView />} />
      <Route path="/join" element={<JoinGame />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/lobby" element={<Lobby />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
