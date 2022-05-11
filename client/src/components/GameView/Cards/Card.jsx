import React from 'react';

function Card({ currentCard }) {
  console.log('current', currentCard);
  return (
      <li className="list-group-item" style={{ padding: 0 }}>
        <button
          type="button"
          className="list-group-item list-group-item-action"
          style={{ padding: 0 }}
        >
          <img
            src={ currentCard }
            className="card-img-top card-art-image"
            alt="..."
            style={{ height: '100%' }}
          />
        </button>
      </li>
  );
}

export default Card;
