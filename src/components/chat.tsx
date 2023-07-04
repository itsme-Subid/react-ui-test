import ChatBox from "./chatBox";
import RightBar from "./rightBar";

const Chat = () => {
  return (
    <div className="chat flex h-full">
      <ChatBox />
      <RightBar />
    </div>
  );
};

export default Chat;
