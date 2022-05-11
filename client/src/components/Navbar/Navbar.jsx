import React, { useState } from 'react';
import useStore from '../Store/store';

function Navbar() {
  const logOut = useStore(state => state.logOut);
  const loggedInStatus = useStore(state => state.loggedIn);
  const username = useStore(state => state.username);

  let logInDisplay = null;

  let logOutButton = <a className="nav-link" href="./#/Login">Log In</a>;
  let joinGame = null;
  let createGame = null;
  let gameDisplay = null;
  let signup = <a className="nav-link" href="./#/signup">Signup</a>;

  const createGameDisplay = function () {
    joinGame = <a className="dropdown-item" href="./#/join">Join Game</a>;
    createGame = <a className="dropdown-item" href="./#/create">Create Game</a>;

    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-toggle="dropdown">
          Game Actions
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {joinGame}
          {createGame}
        </div>
      </li>
    );
  };

  const changeBackground = function (e) {
    const lakeUrl = 'images/backgrounds/lake.png';
    const castleUrl = 'images/backgrounds/castle.png';
    const catCafeUrl = 'images/backgrounds/catCafe.png';
    const blueSkiesUrl = 'images/backgrounds/blueSkiesAnime.jpg';


    switch (e.target.text) {
      case 'Scenic Lake':
        document.body.style.backgroundImage = `url(${lakeUrl})`;
        break;
      case 'Castle':
        document.body.style.backgroundImage = `url(${castleUrl})`;
        break;
      case 'Cat Cafe':
        document.body.style.backgroundImage = `url(${catCafeUrl})`;
        break;
      case 'Blue Skies':
        document.body.style.backgroundImage = `url(${blueSkiesUrl})`;
        break;
    }
  }

  // if logged in
  if (loggedInStatus) {
    logInDisplay = (
      <li className="nav-item">
        <a className="nav-link" href="./#/userprofile">Your Profile</a>
      </li>
    );

    signup = null;
    logOutButton = <a className="nav-link" href="#" onClick={logOut}>Logout</a>;

    gameDisplay = createGameDisplay();
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> <img className="navbar-icon" src="images/branding/heartBaloon_icon.png" alt="heart baloon icon" /> <span className="nav-title"> Love Letter </span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
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
            {gameDisplay}
            <li className="nav-item dropdown dd-bttn">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-toggle="dropdown" style={{ margin: 0 }}>
                Themes
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" onClick={changeBackground}>Scenic Lake</a>
                <a className="dropdown-item" onClick={changeBackground}>Castle</a>
                <a className="dropdown-item" onClick={changeBackground}>Cat Cafe</a>
                <a className="dropdown-item" onClick={changeBackground}>Blue Skies</a>
              </div>
            </li>
            <li>
              {logOutButton}
            </li>
            <li>
              {signup}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
