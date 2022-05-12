import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import React from 'react';
// import { Link } from 'react-router-dom';
// import useStore from './Store/store';

function TestHome() {
  // const user = useStore((state) => state.user);
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
              <button type="button" className="btn btn-ligth">Get started</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <hr />
        <div className="row align-items-start">
          <div className="col" id="project-description">
            <p> the project </p>
              <img className="corporate-logo" src="images/branding/blueOceanPacific_logo.png" alt="blue ocean and pacific team logo" />
          </div>
          <div className="col"
            id="the-team">
            <p> the team </p>
          </div>
          <div className="col">
            <p> the stack</p>
          </div>
        </div>
      </div>

    </div >
  );
}


export default TestHome;
