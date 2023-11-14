import micOnIcon from "../assets/micOnParticpant.svg";
import micOffIcon from "../assets/micOffParticpant.svg";

import videoOnIcon from "../assets/videoOnParticipant.svg";
import videoOffIcon from "../assets/videoOffParticipant.svg";

export const Participant: React.FC<{
  picture?: string;
  name?: string;
  lastName?: string;
  micOn?: boolean;
  videoOn?: boolean;
}> = ({ picture, name, lastName, micOn, videoOn }) => {
  return (
    <div className="flex items-center justify-between rounded-full bg-darkBlue-900 p-2">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 overflow-hidden rounded-full">
          <img src={picture} />
        </div>
        <div className="flex gap-1 text-sm text-blue-100 ">
          <span>{name}</span>
          <span className="hidden lg:block">{lastName}</span>
        </div>
      </div>

      <div className="mr-3 flex gap-3">
        <img
          className="h-[1.4rem] w-[1.4rem]"
          src={micOn ? micOnIcon : micOffIcon}
        />
        <img
          className="h-[1.4rem] w-[1.4rem]"
          src={videoOn ? videoOnIcon : videoOffIcon}
        />
      </div>
    </div>
  );
};