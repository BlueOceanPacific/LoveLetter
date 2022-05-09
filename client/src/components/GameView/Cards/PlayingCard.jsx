import React, { useState, useRef } from 'react';

function PlayingCard({ card, target = false, cardType = false, children }) {
  const [showModal, setShowModal] = useState(0);
  const modalElement = useRef();

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
        <div className="modal-dialog">
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
            <div className="modal-body">
              {React.cloneElement(children, { showModal })}
            </div>
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
                onClick={() => setShowModal(false)}
                disabled={!(target !== 0 && cardType !== 0)}
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
