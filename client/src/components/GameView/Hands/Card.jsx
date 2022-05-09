import React from 'react';

function Card() {
  return (
    <div className="card" style={{ width: 'auto', height: '100%', background: '#000' }}>
      <li className="list-group-item" style={{ padding: 0 }}>
        <button
          type="button"
          className="list-group-item list-group-item-action"
          style={{ padding: 0, aspectRatio: '2.2 / 3.43', width: "5.5vw" }}
        >
          {/* <img
            src="/images/cards/Clown_Card.png"
            className="card-img-top card-art-image"
            alt="..."
            style={{ height: '100%' }}
          /> */}
        </button>
      </li>
    </div>
  );
}

export default Card;
