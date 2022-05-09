import React from 'react';

function Card() {
  return (
    <div className="card" style={{ width: '50%' }}>
      <li className="list-group-item" style={{ padding: 0 }}>
        <button
          type="button"
          className="list-group-item list-group-item-action"
          style={{ padding: 0 }}
        >
          <img
            src="/images/cards/BackCard.png"
            className="card-img-top card-art-image"
            alt="..."
            style={{ height: '100%' }}
          />
        </button>
      </li>
    </div>
  );
}

export default Card;
