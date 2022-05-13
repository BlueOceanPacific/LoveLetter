import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

// * Video mode & encoded setting
const config = {
  mode: "rtc",
  codec: "vp8",
};

// * Get current client from hooks
const useClient = createClient(config);
const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

const agoraHooks = {
  useClient,
  useMicrophoneAndCameraTracks
}

export default agoraHooks;