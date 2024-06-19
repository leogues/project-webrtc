import { Chat } from "../chat/Chat";
import { SiderbarHeader } from "./SiderbarHeader";

export const ChatSidebar: React.FC<{
  handleMinimizar: (event: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ handleMinimizar }) => {
  return (
    <div
      className="group flex flex-col aria-expanded:min-h-[60%] aria-expanded:flex-1 aria-expanded:grow"
      data-testid="chat"
      aria-expanded="true"
    >
      <SiderbarHeader
        name="Chat"
        handleMinimizar={handleMinimizar}
        buttonTestId="chat-expand-toggle"
      />
      <Chat />
    </div>
  );
};
