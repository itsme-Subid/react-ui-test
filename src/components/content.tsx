import Subject from "./subject";
import Profile from "./profile";

const Content = () => {
  return (
    <div className="content flex h-screen overflow-hidden bg-gray-200/50">
      <Profile />
      <Subject />
    </div>
  );
};

export default Content;
