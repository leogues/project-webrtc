import { useContext, useMemo, useReducer } from "react";

import { StreamContext } from "../../../context/StreamV2Context";
import { useMeQuery } from "../../../hooks/useUser";
import { MaximizeIcon } from "../../../icons/stream/Maximize";
import {
  MicrophoneOffIcon,
  MicrophoneOnIcon,
} from "../../../icons/stream/Microphone";
import { Peer } from "../../../types/peer";
import { cn } from "../../../utils/cn";
import { UserMicrophoneVideoToggle } from "../../UserMicrophoneVideoToggle";
import { Button } from "../../common/Button";
import { Label } from "./Label";
import { VideoPlayer } from "./VideoPlayer";

export const FocusedVideoDisplay: React.FC<{
  focusedPeer: Peer;
}> = ({ focusedPeer }) => {
  const { data: user } = useMeQuery();
  const { localStream } = useContext(StreamContext);
  const [isFullscreen, toggleFullScreen] = useReducer(
    (isFullscreen) => !isFullscreen,
    false,
  );

  const audioOn = focusedPeer?.isMicOn;
  const videoOn = focusedPeer?.isWebCamOn || focusedPeer?.isSharingScreenOn;

  const stream = useMemo<MediaStream | undefined>(() => {
    if (focusedPeer?.user?.id === user?.id) {
      return localStream.current;
    }

    return focusedPeer?.stream;
  }, [focusedPeer, localStream]);

  const isMyVideo = focusedPeer?.user?.id === user?.id;

  return (
    <div className="flex min-h-[150px] min-w-0 justify-center">
      {focusedPeer && (
        <div
          data-testid="focused-peer-video"
          data-fullscreen={isFullscreen}
          className="relative aspect-[21/9] max-h-full max-w-full
justify-center overflow-hidden rounded-xl bg-black data-[fullscreen=true]:fixed 
data-[fullscreen=true]:left-0 data-[fullscreen=true]:top-0 data-[fullscreen=true]:z-[100] 
data-[fullscreen=true]:h-full data-[fullscreen=true]:w-full data-[fullscreen=true]:rounded-none"
        >
          {stream && (videoOn || audioOn) && (
            <VideoPlayer
              stream={stream}
              muted={isMyVideo}
              className={cn({
                invisible: !videoOn,
              })}
            />
          )}

          <div className="absolute right-5 top-4 z-10">
            <Button testid="fullscreen-toggle" onClick={toggleFullScreen}>
              <Label padding="rounded">
                <MaximizeIcon height={20} width={20} />
              </Label>
            </Button>
          </div>
          <div className="absolute bottom-5 left-7 z-10 flex gap-1">
            <Label className="truncate">
              <span>{focusedPeer.user?.name}</span>
              <span>{focusedPeer.user?.lastName}</span>
            </Label>
          </div>

          {!videoOn && (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-20 w-20 overflow-hidden rounded-full">
                <img src={focusedPeer.user?.picture} />
              </div>
            </div>
          )}

          <div className="absolute bottom-5 right-7 z-10">
            <UserMicrophoneVideoToggle bg="toggle" toggle={focusedPeer.isMicOn}>
              {focusedPeer.isMicOn ? (
                <MicrophoneOnIcon width={24} height={24} />
              ) : (
                <MicrophoneOffIcon width={24} height={24} />
              )}
            </UserMicrophoneVideoToggle>
          </div>
        </div>
      )}
    </div>
  );
};
