/* eslint-disable react/prop-types */
import React from "react";
import { AgoraVideoPlayer } from "agora-rtc-react";
// import {
//   VideocamOffIcon,VideocamIcon,
//   MicIcon,MicOffIcon,MicOffOutlinedIcon,
//   ExitToAppIcon,
// } from '@mui/icons-material';

export default function Videos(props) {
  const { users, tracks } = props;
  // console.warn(users);
  return (
    <div className="videos">
      {/* AgoraVideoPlayer component takes in the video track to render the stream,
            you can pass in other props that get passed to the rendered div */}
      <div>
        <AgoraVideoPlayer videoTrack={tracks[1]}>
          <span className="float-text">You</span>
        </AgoraVideoPlayer>
      </div>
      {users.length > 0 &&
        users.map((user, index) =>
          !user.videoTrack ? (
            <div>
              {" "}
              <span className="float-text">Player {index + 2}</span>
            </div>
          ) : (
            <div>
              <AgoraVideoPlayer videoTrack={user.videoTrack} key={user.uid}>
                <span className="float-text">Player {index + 2}</span>
              </AgoraVideoPlayer>
            </div>
          )
        )}
    </div>
  );
}
