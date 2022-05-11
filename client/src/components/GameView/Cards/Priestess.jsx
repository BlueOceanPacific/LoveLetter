import React, { useEffect } from 'react';
import useStore from '../../Store/store';

function Priestess({ game, target, targetChangeHandler, showModal, socket, played }) {
  const user = useStore(state => state.user);
  useEffect(() => {
    if (played) {
      socket.emit('updateGameState', {
        game: game.name,
        user: user.username,
        move: { card: { name: 'priestess', value: "4" }, target: null, cardType: null },
      });
    }
  }, [played]);
  return (
    <>You cannot be targeted by other players until your next turn</>
  );
}

export default Priestess;
