/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import agoraHooks from "./hooks";

// * Get current client from hooks
const { useClient } = agoraHooks;

export default function Controls(props) {
  const client = useClient();
  const { tracks, setStart, setInCall } = props;
  const [trackState, setTrackState] = useState({ video: true, audio: true });
  const mute = async (type) => {
    if (type === "audio") {
      await tracks[0].setEnabled(!trackState.audio);
      setTrackState((ps) => ({ ...ps, audio: !ps.audio }));
    } else if (type === "video") {
      await tracks[1].setEnabled(!trackState.video);
      setTrackState((ps) => ({ ...ps, video: !ps.video }));
    }
  };

  const leaveChannel = async () => {
    await client.leave();
    client.removeAllListeners();
    // we close the tracks to perform cleanup
    tracks[0].close();
    tracks[1].close();
    setStart(false);
    setInCall(false);
  };
  return (
    <div className="controls">
      <p className={trackState.audio ? "on" : ""} onClick={() => mute("audio")}>
        {trackState.audio ? <i className="fa-solid fa-lg fa-microphone" /> :  <i className="fa-solid fa-lg fa-microphone-slash"/>}
      </p>
      <p className={trackState.video ? "on" : ""} onClick={() => mute("video")}>
        {trackState.video ? (
          <i className="fa-solid fa-lg fa-video"/>
        ) : (
          <i className="fa-solid fa-lg fa-video-slash"/>
        )}
      </p>
      <p onClick={() => leaveChannel()}>
        <i className="fa-solid fa-lg fa-arrow-right-from-bracket" />
      </p>
    </div>
  );
}
