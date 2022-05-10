import React, { useEffect } from 'react';
import useStore from '../../Store/store';

function General({ players, target, targetChangeHandler, showModal }) {
  const user = useStore(store => store.user);

  useEffect(() => {
    showModal && targetChangeHandler("0");
  }, [showModal])

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
      {players.filter(({ username }) => username !== user.username).map(({ username }) => (
        <option key={username} value={username}>
          {username}
        </option>
      ))}
    </select>
  );
}

export default General;
