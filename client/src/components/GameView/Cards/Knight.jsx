import React, { useState } from 'react';

function Knight({ players }) {
  const [target, setTarget] = useState(0);

  const playEffect = () => {
    console.log(target);
  };

  const targetChangeHandler = (ev) => setTarget(ev.target.value);

  return (
    <>
      <div
        className="modal fade"
        id="knight-modal"
        tabIndex="-1"
        aria-labelledby="knight-modal-label"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="knight-modal-label">
                Knight
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <select
                className="form-select"
                aria-label="Choose a target player"
                onChange={targetChangeHandler}
              >
                <option defaultValue value={0}>
                  Choose a target player
                </option>
                {players.map(({ username }) => (
                  <option key={username} value={username}>
                    {username}
                  </option>
                ))}
              </select>
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
                disabled={!(target !== 0)}
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
            // onClick={playEffect}
            data-bs-toggle="modal"
            data-bs-target="#knight-modal"
          >
            <img
              src="/images/cards/Knight_Card.png"
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

export default Knight;
