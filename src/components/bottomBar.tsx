import { BsChevronDown } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";

const BottomBar = () => {
  return (
    <div className="fixed left-0 right-0 bottom-0 z-20">
      <div className="wrapper flex justify-between py-4 px-4 pr-10 shadow-custom bg-white">
        <div className="left btn-group w-fit text-white flex gap-[1px]">
          <button className="border-r bg-primary-foreground py-2 px-4 rounded-s-md flex gap-2 items-center">
            <span className="w-4 h-4 bg-white/80 border border-primary rounded-full"></span>
            <span className="font-semibold">Open</span>
          </button>
          <button className="bg-primary-foreground py-2 px-4 rounded-e-md">
            <BsChevronDown />
          </button>
        </div>
        <div className="right flex gap-12">
          <button className="border py-2 px-8 whitespace-nowrap border-gray-400 rounded-md text-base text-gray-600 font-semibold">
            Close Ticket
          </button>
          <button className="border h-full aspect-square flex items-center justify-center border-gray-400 rounded-md text-xl text-red-600 font-semibold">
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
