import React from 'react';
import { Link } from 'react-router-dom';
import useStore from './Store/store';

function TestHome() {
  const user = useStore((state) => state.user);
  return (

    <div>
      <img className="baloon" src="images/backgrounds/heartBaloon.png" alt="flying baloon" />

      <div className="th-top-container">
        <div className="col-left">
          <div className="intro">
            <h4> [intro]</h4>
          </div>
          <div className="main-title">
            <img src="images/branding/LoveLetterLogo_2.png" alt="love letter logo" />
            <h3 className="slogan"> a game of chivalry</h3>
          </div>


        </div>

        <div className="col-right">
          {/* card */}
          {!user &&
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
          }
          {user &&
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
                  <Link to="/play/lobby/demo-building">Lobby</Link>
                </li>
                <li key="game" className="list-group-item">
                  <Link to="/play/game/demo-playing">/game/:id</Link>
                </li>
                <li key="chat" className="list-group-item">
                  <Link to="/chat">Chat</Link>
                </li>
                <li key="testHome" className="list-group-item">
                  <Link to="/testHome">testHome</Link>
                </li>
              </ul>
            </div>
          }
          <div className="get-started">
            <button type="button" className="btn btn-primary">Get started</button>
          </div>
        </div>
      </div>

      <div className="footer">
        <hr />
        <div className="row align-items-start">
          <div className="col" id="project-description">
            <p> project description </p>
          </div>
          <div className="col"
          id="the-team">
           <p> the team </p>
          </div>
          <div className="col">
           <p> the tech stack</p>
          </div>
        </div>
        </div>

    </div>
  );
}


export default TestHome;
