import React from 'react';
import { Link } from 'react-router-dom';
import useStore from './Store/store';

function Home() {
  const user = useStore((state) => state.user);

  if (!user) {
    return (
      <div
        className="card"
        style={{ width: '18rem', margin: '5% auto', textAlign: 'center' }}
      >
        <h5 className="card-header">Love Letter</h5>
        <ul className="list-group list-group-flush">
          <li key="login" className="list-group-item">
            <Link to="/login">Login</Link>
          </li>
          <li key="signup" className="list-group-item">
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div
      className="card"
      style={{ width: '18rem', margin: '5% auto', textAlign: 'center' }}
    >
      <h5 className="card-header">Love Letter</h5>
      <ul className="list-group list-group-flush">
        <li key="create" className="list-group-item">
          <Link to="/create">Create Game</Link>
        </li>
        <li key="join" className="list-group-item">
          <Link to="/join">Join Game</Link>
        </li>
        <li key="leaderboard" className="list-group-item">
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li key="login" className="list-group-item">
          <Link to="/login">Login</Link>
        </li>
        <li key="signup" className="list-group-item">
          <Link to="/signup">Signup</Link>
        </li>
        <li key="profile" className="list-group-item">
          <Link to="/userprofile">User Profile</Link>
        </li>
        <li key="lobby" className="list-group-item">
          <Link to="/play/lobby/:id">Lobby</Link>
        </li>
        <li key="game" className="list-group-item">
          <Link to="/play/game/:id">/game/:id</Link>
        </li>
        <li key="chat" className="list-group-item">
          <Link to="/chat">Chat</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
