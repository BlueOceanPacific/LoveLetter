import React from 'react';

function Minister() {
  const playEffect = () => {
    console.log('Minister Discarded!');
  };

  return (
    <>
      <div
        className="modal fade"
        id="minister-modal"
        tabIndex="-1"
        aria-labelledby="minister-modal-label"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="minister-modal-label">
                Minister
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              If the value of your hand is 12 or higher, you are out of the
              round (this effect is instant. If you draw a card of value 5 or
              higher while holding the Minister, immediately discard both cards
              and you are out of the round)
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={playEffect}
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
            data-bs-target="#minister-modal"
          >
            <img
              src="/images/cards/Minister_Card.png"
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

export default Minister;
