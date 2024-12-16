import { RxDragHandleVertical } from "react-icons/rx";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import ChatInput from "./components/ChatInput";
import LeftCard from "./components/LeftCard";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-blue-100 p-4">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
         
         {/* wallet connect button */}
         <button className=" absolute right-0 top-0 mr-4 mt-4 flex items-center justify-between bg-transparent rounded-full p-2 gap-1  ">
               <div className=" text-sm flex flex-col ">
                  <p className=" text-black font-bold pr-1 text-sm">Usama Nadeem</p>
                  <p className="text-sm">Wallet ID: 0x1234</p>
               </div>
               <div className=" rounded-full bg-gray-500 p-1 ms-2">
                   <img src="https://via.placeholder.com/150x150" alt="hello"  className="h-10 w-10 rounded-full"/>
               </div>
         </button>
      

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 p-6 w-full h-full overflow-y-auto flex flex-col items-center justify-center py-20">
          <p className="rounded-full py-2 px-6 bg-white text-black font-medium">CHAT A.I +</p>
          <h1 className="text-3xl font-bold my-3 mb-8">Good day! How may I assist you today?</h1>

          {/* Cards */}
          <div className="flex items-start justify-center w-full h-auto flex-wrap">
            {/* Left Cards Section */}
            <div className="hidden lg:flex flex-col items-center justify-center w-[27%] h-auto  gap-4">
              <div className="flex items-center gap-x-1">
                <LeftCard title="Explain" description="Quantum computing in simple terms" />
                <RxDragHandleVertical className="text-gray-500 text-[5rem]" />
              </div>
              <div className="flex items-center gap-x-1">
                <LeftCard title="Explain" description="Quantum computing in simple terms" />
                <RxDragHandleVertical className="text-gray-500 text-[5rem]" />
              </div>
              <div className="flex items-center gap-x-1">
                <LeftCard title="Explain" description="Quantum computing in simple terms" />
                <RxDragHandleVertical className="text-gray-500 text-[5rem]" />
              </div>
            </div>

            {/* Right Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full lg:w-[50%] gap-4">
              <Card title="Explain" description="Quantum computing in simple terms" />
              <Card title="How to" description="Make a search engine platform like Google" />
              <Card title="Remember" description="Quantum computing in simple terms" />
              <Card title="Allows" description="User to provide follow-up corrections" />
              <Card title="May" description="Occasionally generate incorrect information" />
              <Card title="Limited" description="Knowledge of world and events after 2021" />
            </div>
          </div>
        </main>

        {/* Chat Input */}
        <div className=" fixed bottom-0  w-full   bg-white flex items-center justify-center z-[999]">
        <ChatInput />
        </div>
      </div>
    </div>
  );
};

export default App;
