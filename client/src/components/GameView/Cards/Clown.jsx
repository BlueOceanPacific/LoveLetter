/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import useStore from '../../Store/store';

function Clown({
  game,
  target,
  targetChangeHandler,
  showModal,
  played,
  socket,
}) {
  const user = useStore((store) => store.user);

  useEffect(() => {
    showModal && targetChangeHandler('0');
  }, [showModal]);

  useEffect(() => {
    if (played) {
      socket.emit('updateGameState', {
        game: game.name,
        user: user.username,
        move: { card: { name: 'clown', value: "2" }, target, cardType: null },
      });
    }
  }, [played]);

  return (
    <select
      className="form-select"
      aria-label="Choose a target player"
      value={target}
      onChange={({ target }) => targetChangeHandler(target.value)}
    >
      <option defaultValue value="0">
        Choose a target player
      </option>
      {game.players
        .filter(({ username }) => username !== user.username)
        .map(({ username }) => (
          <option key={username} value={username}>
            {username}
          </option>
        ))}
    </select>
  );
}

export default Clown;
