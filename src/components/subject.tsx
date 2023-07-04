import Chat from "./chat";
import TopBar from "./topBar";

const Subject = () => {
  return (
    <div className="subject w-full h-screen overflow-auto">
      <TopBar />
      <Chat />
    </div>
  );
};

export default Subject;
