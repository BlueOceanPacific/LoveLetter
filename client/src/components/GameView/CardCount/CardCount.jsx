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

import Card from "../Hands/Card";
import "./CardCount.scss";

function CardCount() {
  let cards = [];
  cards.push(
    <li className="list-group-item">
      <Card />
    </li>
  );
  cards.push(
    <li className="list-group-item">
      <Card />
    </li>
  );
  cards.push(
    <li className="list-group-item">
      <Card />
    </li>
  );

  return (
    <div className="discard-pile">
      <>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#rules-modal"
        >
          View Discarded Cards
        </button>
        <div
          className="modal fade rules"
          id="rules-modal"
          tabIndex="-1"
          aria-labelledby="rules-modal-label"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="rules-modal-label">
                  Discarded Cards
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <ul className="list-group flex-md-row">{cards}</ul>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default CardCount;
