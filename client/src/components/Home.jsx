import React from 'react';
import {
  Link,
} from 'react-router-dom';

function Home() {
  return (
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
  );
}

export default Home;
