import React from "react";
import Clown from "../Cards/Clown";
import Priestess from "../Cards/Minister";
import PlayingCard from "../Cards/PlayingCard";
import Soldier from "../Cards/Soldier";
import Wizard from "../Cards/Wizard";
import Knight from "../Cards/Knight";
import Liege from "../Cards/Liege";
import General from "../Cards/General";
import Minister from "../Cards/Minister";

import Card from "../Cards/Card";
import "./DiscardPile.scss";

function DiscardPile({ game }) {
  const { discardPile } = game.currentRound;

  return (
    <div className="discard-pile">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#discard-modal"
      >
        View Discarded Cards
      </button>
      <div
        className="modal fade rules"
        id="discard-modal"
        tabIndex="-1"
        aria-labelledby="discard-modal-label"
        aria-hidden="true"
      >
        <div className="discard-modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <ul className="list-group flex-md-row">
                  {discardPile.map((card) => <Card currentCard={ card.image }/>)}
                </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscardPile;
