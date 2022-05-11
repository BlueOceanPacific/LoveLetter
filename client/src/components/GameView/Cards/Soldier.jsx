import React, { useEffect } from 'react';
import useStore  from '../../Store/store';

import CARD_TYPES from '../../../util/card-types';

function Soldier({
  game,
  target,
  targetChangeHandler,
  cardType,
  cardTypeChangeHandler,
  showModal,
  socket,
  played
}) {

  const user = useStore(store => store.user);

  useEffect(() => {
    showModal && targetChangeHandler("0");
    showModal && cardTypeChangeHandler("0");
  }, [showModal]);

  useEffect(() => {
    if (played) {
      socket.emit('updateGameState', {
        game: game.name,
        user: user.username,
        move: { card: { name: 'soldier', value: "1" }, target, cardType },
      });
    }
  }, [played]);

  return (
    <>
      <select
        className="form-select"
        aria-label="Choose a Target Player"
        value={target}
        onChange={({ target }) => targetChangeHandler(target.value)}
      >
        <option defaultValue value="0">
          Choose a target player
        </option>
        {game.players.filter(({ username }) => username !== user.username).map(({ username }) => (
          <option key={username} value={username}>
            {username}
          </option>
        ))}
      </select>
      <select
        className="form-select"
        aria-label="Choose a Card Type"
        value={cardType}
        onChange={({ target }) => cardTypeChangeHandler(target.value)}
      >
        <option defaultValue value="0">
          Choose a Card Type
        </option>
        {CARD_TYPES.filter(({value}) => value !== "1").map(({ name, value }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
    </>
  );
}

export default Soldier;
