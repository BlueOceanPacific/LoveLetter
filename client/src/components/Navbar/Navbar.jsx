import React, { useState } from 'react';
import useStore from '../Store/store';

function Navbar() {
  const logOut = useStore(state => state.logOut);
  const loggedInStatus = true;
  // useStore(state => state.loggedIn);
  const username = useStore(state => state.username);

  let logInDisplay = null;

  let logOutButton = <a class="nav-link" href="./#/Login">Log In</a>;
  let joinGame = null;
  let createGame = null;
  let signup = <a className="nav-link" href="./#/signup">Signup</a>;

  // if logged in
  if (loggedInStatus) {
    logInDisplay = (
      <li className="nav-item">
        <a className="nav-link" href="./#/userprofile">Your Profile</a>
      </li>
    );

    signup = null;
    logOutButton = <a className="nav-link" href="#" onClick={logOut}>Logout</a>;

    joinGame = (
      <li className="nav-item">
        <a className="nav-link" href="./#/join">Join Game</a>
      </li>
    );

    createGame = (
      <li className="nav-item">
        <a className="nav-link" href="./#/create">Create Game</a>
      </li>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">❤️ Love Letter</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
          </li>
          {logInDisplay}
          <li className="nav-item">
            <a className="nav-link" href="./#/leaderboard">Leaderboard</a>
          </li>
          {createGame}
          {joinGame}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-toggle="dropdown">
              Themes
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Cat Cafe</a>
              <a className="dropdown-item" href="#">Picnic</a>
            </div>
          </li>
        </ul>
        {logOutButton}
        {signup}
      </div>
    </nav>
  );
}

export default Navbar;
