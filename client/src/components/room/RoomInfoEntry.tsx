import { useNavigate } from "react-router-dom";

import { useThisRoom } from "../../hooks/useRoom";
import { useRoomActions } from "../../hooks/useRoomStore";
import { formatDate } from "../../utils/dateUtils";
import { MeetingButtons } from "../home/MeetingButtons";

export const RoomInfoEntry: React.FC = () => {
  const { data: room } = useThisRoom();
  const { toggleEnteredRoom } = useRoomActions();

  const navigate = useNavigate();

  const redirectHomeHandle = () => {
    navigate("../");
  };

  const createAtFormated = !!room ? formatDate(room.createdAt) : null;

  return (
    <div className="font-family flex h-full flex-grow items-center justify-center text-gray-850 dark:text-gray-300">
      <div className="w-[95%] max-w-xs rounded-md bg-white px-6 py-4 shadow-md dark:bg-darkBlue-900 sm:w-full sm:max-w-md sm:px-10 sm:py-8">
        <div className="flex flex-col">
          <span className="text-center text-2xl text-gray-850 dark:text-[#E2E2E2]">
            {room?.topic}
          </span>
          <span className="mt-4 text-center text-gray-400 dark:text-[#9F9F9F]">
            {createAtFormated}
          </span>

          <MeetingButtons
            leftButtonText="Voltar para home"
            leftButtonHandle={redirectHomeHandle}
            rightButtonText="Entrar"
            rightButtonHandle={toggleEnteredRoom}
          />
        </div>
      </div>
    </div>
  );
};
