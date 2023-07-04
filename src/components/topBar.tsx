import { IoMailOutline } from "react-icons/io5";

const TopBar = () => {
  return (
    <div className="topbar p-6 pb-0 border-b-2 flex flex-col gap-2 bg-white">
      <div className="wrapper flex justify-between">
        <div className="title">
          <h2 className="flex items-center gap-4">
            <span className="border rounded-full w-12 h-12 flex items-center justify-center">
              <IoMailOutline size="1.75rem" />
            </span>
            <span className="text-2xl font-bold text-gray-600">
              How can I get a refund for my order?
            </span>
          </h2>
        </div>
        <div className="right flex gap-4">
          <div className="ticket flex flex-col gap-2 justify-center">
            <div className="label text-center text-gray-400 text-sm font-semibold">
              Ticket
            </div>
            <div className="value border py-2 px-4 border-gray-300 rounded-sm">
              #5555
            </div>
          </div>
          <div className="status flex flex-col gap-2 justify-center">
            <div className="label text-center text-gray-400 text-sm font-semibold">
              Status
            </div>
            <div className="value py-2 px-4 text-primary-foreground font-semibold">
              Open
            </div>
          </div>
        </div>
      </div>
      <ul className="tabs flex gap-16">
        <li className="tab active border-b-4 border-primary-300 p-2 text-primary-300 font-semibold">
          Conversation
        </li>
        <li className="tab p-2">Attachment</li>
        <li className="tab p-2">History</li>
      </ul>
    </div>
  );
};

export default TopBar;
