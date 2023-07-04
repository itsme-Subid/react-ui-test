import { IoMailOutline } from "react-icons/io5";
import { AiOutlinePaperClip } from "react-icons/ai";

const MessageList = () => {
  return (
    <div className="message-list h-full">
      <div className="title-with-tags bg-white border-b-2 border-l-4 border-l-primary-foreground px-6 py-3 relative z-10">
        <h2 className="flex items-center gap-4">
          <span className="border rounded-full w-12 h-12 flex items-center justify-center">
            <IoMailOutline size="1.75rem" />
          </span>
          <span className="text-2xl font-bold text-gray-600">
            How can I get a refund for my order?
          </span>
        </h2>
      </div>
      <div className="message bg-white rounded-bl rounded-br mx-4 flex flex-col gap-4 shadow-simple">
        <p className="p-4 py-8">
          Hi, <br /> <br /> Do you guys have an estimate for how long we'll have
          to wait for these two-factor authentication? I'm getting some pressure
          from our head of IT who's pushing to switch to one of your
          competitors.
          <br /> <br />
          Thanks, Mark
        </p>
        <div className="attachment">
          <div className="title flex gap-4 text-gray-500 p-4 py-8">
            <AiOutlinePaperClip size="1.75rem" />1 attachment
          </div>
          <div className="title-with-tags bg-secondary/10 border border-secondary border-l-4 px-6 py-3">
            <h4 className="flex items-center justify-between gap-4">
              <span className="text-gray-600">Hi Team Mate this is a note</span>
              <span className="text-white bg-secondary py-1 px-4 rounded-full">
                Private Note/ Public Note(display in help center)
              </span>
            </h4>
          </div>
        </div>
      </div>
      <div className="title bg-white border-2 px-6 py-3">
        <h2 className="flex items-center gap-4">
          <span className="border rounded-full w-12 h-12 flex items-center justify-center">
            <IoMailOutline size="1.75rem" />
          </span>
          <span className="text-2xl font-bold text-gray-600">
            How can I get a refund for my order?
          </span>
        </h2>
      </div>
      <div className="message bg-white rounded-bl rounded-br mx-4 flex flex-col gap-4 shadow-simple h-24"></div>
    </div>
  );
};

export default MessageList;
