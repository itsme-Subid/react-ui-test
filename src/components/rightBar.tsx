import { AiOutlineInfoCircle, AiOutlinePaperClip } from "react-icons/ai";
import { BiUser } from "react-icons/bi";

const RightBar = () => {
  return (
    <ul className="ml-auto h-full bg-white">
      <li className="px-4 py-3 active bg-primary-300/10 border border-primary-300 text-primary-300">
        <AiOutlineInfoCircle size="1.75rem" />
      </li>
      <li className="px-4 py-3 text-gray-400">
        <BiUser size="1.75rem" />
      </li>
      <li className="px-4 py-3 text-gray-400">
        <AiOutlinePaperClip size="1.75rem" />
      </li>
    </ul>
  );
};

export default RightBar;
