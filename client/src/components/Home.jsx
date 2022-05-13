import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import React from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import useStore from './Store/store';

function Home() {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate('/login');
  }
  return (
    <div>
      {/* these 2 images are hidden initially - don't change */}
      <div>
        <img className="balloon" src="images/backgrounds/heartBalloon.png" alt="flying balloon" />
        <img className="balloon2" src="images/backgrounds/heartBalloon.png" alt="flying balloon" />
      </div>
      {/* main container */}
      <div className="th-top-container">
        <div className="row">
          {/* first column */}
          <div className="col">
            <div className="row">
              <div className="top-slogan"> lucky in games, lucky in love</div>
            </div>
            <div className="row">
              <img className="main-title" src="images/branding/Tittle_TypeWriter.png" alt="main logo" />
            </div>
            <div className="row">
              <div className="bottom-slogan"> a game of chivalry</div>
            </div>
          </div>

          {/* second column */}
          <div className="col">
            <div className="row center">
              <div className="col"> </div>
              {/* carousel */}
              <div id="cards-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                  <div className="carousel-item active">
                    <img src="images/cards/BackCard.png" className="d-block w-100 carousel-card" alt="a card" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/cards/Clown_Card.png" className="d-block w-100 carousel-card" alt="a card" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/cards/Knight_Card2.png" className="d-block w-100 carousel-card" alt="a card" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/cards/General_Card.png" className="d-block w-100 carousel-card" alt="a card" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/cards/Knight_Card.png" className="d-block w-100 carousel-card" alt="a card" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/cards/Princess_Card.png" className="d-block w-100 carousel-card" alt="a card" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/cards/Prince_Card.png" className="d-block w-100 carousel-card" alt="a card" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/cards/Soldier_Card2.png" className="d-block w-100 carousel-card" alt="a card" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/cards/Princess_Card2.png" className="d-block w-100 carousel-card" alt="a card" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/cards/Prince_Card2.png" className="d-block w-100 carousel-card" alt="a card" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/cards/Priestess_Card.png" className="d-block w-100 carousel-card" alt="a card" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/cards/Minister_Card.png" className="d-block w-100 carousel-card" alt="a card" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/cards/Soldier_Card.png" className="d-block w-100 carousel-card" alt="a card" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/cards/Priestess_Card2.png" className="d-block w-100 carousel-card" alt="a card" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/cards/General_Card.png" className="d-block w-100 carousel-card" alt="a card" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/cards/Wizard_Card.png" className="d-block w-100 carousel-card" alt="a card" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/cards/General_Card2.png" className="d-block w-100 carousel-card" alt="a card" />
                  </div>
                  <div className="carousel-item">
                    <img src="images/cards/Wizard_Card2.png" className="d-block w-100 carousel-card" alt="a card" />
                  </div>
                </div>
              </div>
              <div className="col"> </div>
            </div>
            <div className="row get-started">
              <button type="button" className="btn btn-ligth" onClick={handleGetStarted}>Get started</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <hr />
        <div className="row align-items-start">
          <div className="col" id="project-description">
            <div className="row">
              <h4> The project </h4>
              <div className="col">
                <img className="corporate-logo" src="images/branding/blueOceanPacific_logo.png" alt="blue ocean and pacific team logo" />
              </div>
              <div className="col">
                <p>Love Letter was commissioned by
                  <span className="bold-names"> His Grace Sir Dareitus Shakesperion III,
                    Chivalrous King of Reactia</span>. Developed by <span className="bold-names"> Team Pacific </span>, at <span className="bold-names"> Blue Ocean Corp</span>.
                </p>
              </div>
            </div>
          </div>
          <div className="col"
            id="the-team">
            <h4> The team </h4>
            <ul className="footer-list">
              <li>Tyler Fleshren: Product Manager</li>
              <li>Tom Wheeler: Back-End Architecture Owner</li>
              <li>Matt Teran: UI Owner</li>
              <li>Lucas Bonner: Front-End Architecture Owner</li>
              <li>Alex Abushanab: Support Product Manager</li>
              <li>Jacky Lin: Support Back-End Architecture</li>
              <li>Marilene Soares da Costa: Support UI</li>
              <li>Jacob Hansen: Support Front-End Architecture</li>
              <li>Nicholas Sooter: General support</li>
              <li> Paul Koh: General support</li>
            </ul>
          </div>
          <div className="col">
            <h4> The stack</h4>
            <ul className="footer-list">
              <li>React, Zustand</li>
              <li>HTML, SCSS, Bootstrap, Style Loader</li>
              <li>Babel, Webpack</li>
              <li>Node, Express, Axios</li>
              <li>MongoDB, Mongoose</li>
              <li>Socket.IO</li>
              <li>Bcrypt</li>
              <li>Bad Words</li>
            </ul>
          </div>
        </div>
      </div>

    </div >
  );
}


export default Home;
