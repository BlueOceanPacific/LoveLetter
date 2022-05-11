/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import useStore from '../../Store/store';

function Minister({ game, target, targetChangeHandler, showModal, socket, played }) {
  const user = useStore(state => state.user);
  useEffect(() => {
    if (played) {
      socket.emit('updateGameState', {
        game: game.name,
        user: user.username,
        move: { card: { name: 'liege', value: "8" }, target: null, cardType: null },
      });
    }
  }, [played]);
  return (
    <>
      If the value of your hand is 12 or higher, you are out of the round (this
      effect is instant. If you draw a card of value 5 or higher while holding
      the Minister, immediately discard both cards and you are out of the round)
    </>
  );
}

export default Minister;
