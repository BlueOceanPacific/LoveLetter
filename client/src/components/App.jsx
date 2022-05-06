import React from 'react';
import {
  Route,
  Routes,
  Link,
} from 'react-router-dom';

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
    <>
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/create" element={<CreateGame />} />
        <Route path="/game/:id" element={<GameView />} />
        <Route path="/join" element={<JoinGame />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <div>
        <Link to="/chat">chat</Link>
        <br />
        <Link to="/create">create</Link>
        <br />
        <Link to="/game/:id">game/:id</Link>
        <br />
        <Link to="/join">join</Link>
        <br />
        <Link to="/leaderboard">leaderboard</Link>
        <br />
        <Link to="/lobby">lobby</Link>
        <br />
        <Link to="/login">login</Link>
        <br />
        <Link to="/signup">signup</Link>
      </div>

    </>
  );
}

export default App;
