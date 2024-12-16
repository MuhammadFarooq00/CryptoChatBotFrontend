import { FiSend } from "react-icons/fi";

const ChatInput = () => {
  return (
    <div className="fixed bottom-4 w-[90%] lg:w-[65%]   right-4 lg:left-1/4 flex items-center bg-white p-2 rounded-full shadow">
      <input
        type="text"
        placeholder="What’s in your mind?..."
        className="flex-1 outline-none px-4"
      />
      <button className="bg-blue-600 text-white rounded-full p-2">
        <FiSend />
      </button>
    </div>
  );
};

export default ChatInput;
