import InputBox from "./inputBox";
import MessageList from "./messageList";

const ChatBox = () => {
  return (
    <div className="relative w-full h-full border-r bg-gray-200/10">
      <MessageList />
      <InputBox />
    </div>
  );
};

export default ChatBox;
