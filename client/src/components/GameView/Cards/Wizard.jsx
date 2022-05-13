/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import useStore  from '../../Store/store';

function Wizard({ game, target, targetChangeHandler, showModal, socket, played }) {
  const user = useStore(store => store.user);
  
  useEffect(() => {
    showModal && targetChangeHandler("0");
  }, [showModal])

  useEffect(() => {
    if (played) {
      socket.emit('updateGameState', {
        game: game.name,
        user: user.username,
        move: { card: { name: 'wizard', value: "5" }, target, cardType: null },
      });
    }
  }, [played]);

  return (
    <select
      className="form-select"
      aria-label="Choose a target player"
      value={target}
      onChange={({target}) => targetChangeHandler(target.value)}
    >
      <option defaultValue value="0">
        Choose a target player
      </option>
      {game.players.map(({ username }) => (
        <option key={username} value={username}>
          {username}
        </option>
      ))}
    </select>
  );
}

export default Wizard;
