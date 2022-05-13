/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Videos from "./Videos";
import Controls from "./Controls";
import agoraHooks from './hooks';

// * Prerequisite setting
const appId = "4c3907e2dacc4d5fa4427baf17facea1";
const token =
  "0064c3907e2dacc4d5fa4427baf17facea1IADVNVidJ7WJXjvY8pdRbCrZgRqm3g6G0GxbKYLFgshs+nH3mfgAAAAAEAA5DUG6G9t/YgEAAQAa239i";

// * Get current client from hooks
// * Video & Audio Tracks
const {useClient, useMicrophoneAndCameraTracks} = agoraHooks;

export default function VideoCall(props) {
  // * setInCall control leave or join move
  // ! channelName currently is fixed (bind with token)
  const { setInCall, channelName } = props;

  // users include yourself, audience
  const [users, setUsers] = useState([]);
  const [start, setStart] = useState(false);
  // using the hook to get access to client obj
  const client = useClient();
  // set a state to check local tracks(video,audio)
  const { ready, tracks } = useMicrophoneAndCameraTracks();

  useEffect(() => {
    // init SDK
    // * Set Listener, request local tracks(video audio)
    // * if user approve to share video & chat in their PC
    // * Publish his stream to Agora SDK
    const init = async (name) => {
      // listen if a user connect to video chat server
      client.on("user-published", async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        if (mediaType === "video") {
          setUsers((prevUsers) => [...prevUsers, user]);
        }
        if (mediaType === "audio") {
          user.audioTrack.play();
        }
      });

      // listen for disconnect
      client.on("user-unpublished", (user, type) => {
        if (type === "audio") {
          user.audioTrack.remove();
        }
        if (type === "video") {
          setUsers((prevUsers) =>
            prevUsers.filter((User) => User.uid !== user.uid)
          );
        }
      });
      // listen for left
      client.on("user-left", (user) => {
        setUsers((prevUsers) =>
          prevUsers.filter((User) => User.uid !== user.uid)
        );
      });

      await client.join(appId, name, token, null);
      if (tracks) await client.publish([tracks[0], tracks[1]]);
      setStart(true);
    };

    // use click or something
    if (ready && tracks) {
      init(channelName);
    }
  }, [client, ready, tracks]);

  return (
    <div className="videocall">
      {start && tracks && <Videos users={users} tracks={tracks} />}
      {ready && tracks && (
        <Controls tracks={tracks} setStart={setStart} setInCall={setInCall} />
      )}
    </div>
  );
}
