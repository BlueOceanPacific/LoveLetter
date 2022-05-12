import React, { useState } from "react";
import VideoCall from "./VideoCall";

const channelName = "asd";
function VideoChat() {
  const [inCall, setInCall] = useState(false);
  const handleClick = () => {
    setInCall(true);
  };
  return (
    <div className="vchat-heading">
      {inCall ? (
        <VideoCall setInCall={setInCall} channelName={channelName} />
      ) : (
        <button type="button" onClick={handleClick}>
          Start Video Chat
        </button>
      )}
    </div>
  );
}

export default VideoChat;
