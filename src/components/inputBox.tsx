import { AiOutlinePaperClip, AiOutlineSmile } from "react-icons/ai";
import { MdReply } from "react-icons/md";
import { IoFlashOutline } from "react-icons/io5";

const InputBox = () => {
  return (
    <div className="input-box sticky bottom-24 mx-8 ml-16">
      <div className="wrapper w-full flex gap-8">
        <div className="btn-group flex">
          <button className="flex gap-2 items-center py-3 px-6 text-gray-500 font-bold bg-white border-2 border-gray-300 rounded-s-full">
            <span>
              <MdReply size="1.5rem" />
            </span>{" "}
            <span>Reply</span>
          </button>
          <button className="flex gap-2 items-center py-3 px-6 text-gray-500 font-bold bg-white border-2 border-l-0 border-gray-300 rounded-e-full">
            <span>Forward</span>{" "}
            <span>
              <MdReply
                size="1.5rem"
                style={{
                  transform: "rotateY(180deg)",
                }}
              />
            </span>
          </button>
        </div>
        <div className="input-group w-full flex">
          <div className="input-box text-gray-500 gap-2 flex bg-white py-3 px-6 rounded-s-full border-2 border-gray-300 border-r-0 w-full">
            <IoFlashOutline size="1.5rem" />
            <input
              type="text"
              placeholder="Quick reply"
              className="focus:outline-none w-full"
            />
            <AiOutlineSmile size="1.5rem" />
            <AiOutlinePaperClip size="1.5rem" />
          </div>
          <button className="bg-primary-foreground text-white rounded-e-full px-8 font-semibold">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
