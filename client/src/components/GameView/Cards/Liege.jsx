/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import useStore from '../../Store/store';

function Liege({ game, target, targetChangeHandler, showModal, played, socket }) {
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
    <>If you discard this card for any reason, you are out of the round.</>
  );
}

export default Liege;
