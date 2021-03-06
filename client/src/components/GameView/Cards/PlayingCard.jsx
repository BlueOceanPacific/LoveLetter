/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import useStore from '../../Store/store';

function PlayingCard({ card, target = false, cardType = false, children }) {
  const [showModal, setShowModal] = useState(0);
  const [played, setPlayed] = useState(false);
  const { game, user } = useStore((state) => ({ game: state.game, user: state.user }));
  const modalElement = useRef();

  const playCardHandler = () => {
    setShowModal(false);
    setPlayed(true);
  };

  return (
    <>
      <div
        ref={modalElement}
        className="modal fade"
        id={`${card.card}-modal`}
        tabIndex="-1"
        aria-labelledby={`${card.name}-modal-label`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`${card.card}-modal-label`}>
                {card.card}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">{React.cloneElement(children, { showModal, played })}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={playCardHandler}
                disabled={
                  !(target !== '0' && cardType !== '0') ||
                  game.currentRound.currentPlayer !== user.username
                }
              >
                Play Card
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card love-letter-card">
        <li className="list-group-item" style={{ padding: 0 }}>
          <button
            type="button"
            className="list-group-item list-group-item-action"
            style={{ padding: 0 }}
            data-bs-toggle="modal"
            data-bs-target={`#${card.card}-modal`}
            onClick={() => setShowModal(true)}
          >
            <img
              src={card.image}
              className="card-img-top card-art-image"
              alt="..."
              style={{ height: '100%' }}
            />
          </button>
        </li>
      </div>
    </>
  );
}

export default PlayingCard;
