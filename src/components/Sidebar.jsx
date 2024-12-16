import { FiSettings } from "react-icons/fi"; 
import { BiEditAlt, BiMessageRounded } from "react-icons/bi"; 

import { RiAddFill } from "react-icons/ri"; 

import { FiX, FiSearch } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { BsChatLeftText, BsPencilSquare, BsTrash } from "react-icons/bs";
import { useState } from "react";
const Sidebar = ({ isOpen, setIsOpen }) => {
    const [conversations] = useState([
        { id: 1, text: "Create POS System" },
        { id: 2, text: "What Is UI UX" },
        { id: 3, text: "How Chat GPT Works" },
        { id: 4, text: "Create POS System" },
     
      ]);
      const [conversions7day] = useState([
        { id: 1, text: "Create POS System" },
        { id: 2, text: "What Is UI UX" },
        { id: 3, text: "How Chat GPT Works" },
        
      ]);
      const [activeId, setActiveId] = useState(null);
      const [hoveredId, setHoveredId] = useState(null);
      const [activeId7day, setActiveId7day] = useState(null);
      const [hoveredId7day, setHoveredId7day] = useState(null);
      const handleItemClick = (id, text) => {
        setActiveId(id);
        console.log(`Clicked Item ID: ${id}, Text: ${text}`);
      };
      const handleItemClick7day = (id, text) => {
        setActiveId7day(id);
        console.log(`Clicked Item ID: ${id}, Text: ${text}`);
      };
      // Edit Function
      const handleEdit = (id) => {
        console.log(`Edit Clicked for ID: ${id}`);
      };
    
      // Delete Function
      const handleDelete = (id) => {
        console.log(`Delete Clicked for ID: ${id}`);
      };
  return (
    <>
      {/* Overlay for smaller screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 p-3  z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full overflow-y-auto w-72 bg-white shadow-lg z-30 transition-transform rounded-2xl  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:w-80`}
      >
        <div className="px-5 pt-5 pb-3 flex items-center justify-between ">
          <h1 className="text-2xl font-bold  inline-flex items-center justify-center"> <img src="/star.png" alt="logo" height={10} width={25} className=" mr-1" /> DOT AI</h1>
          <FiX
            className="text-2xl cursor-pointer lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        </div>

        {/* Menu */}
        <nav className="px-5 py-3 space-y-4">
          <div className=" flex items-center justify-between">
          <button className="bg-blue-600 text-white  py-2 w-[81%] flex items-center justify-center rounded-full">
           <RiAddFill className=" mr-1 text-lg font-bold" />  New Chat
          </button>
          <button className=" p-2 bg-black rounded-full">
            <FiSearch className="text-white text-[22px] font-bold   " />
          </button>
          </div>
                {/* your conversation section clear section  */}
          <div className=" py-4  border-y border-gray-300">
             <div className=" flex items-center justify-between">
              <p className="text-gray-500  ">Your Conversations</p>
              <p className="text-sm text-blue-700"> Clear All</p>
             </div>
          </div>

          <div className=" pt-1 ">    
          <ul className="space-y-2 border-b border-gray-300">
        {conversations.map((item) => (
          <li
            key={item.id}
            onMouseEnter={() => setHoveredId(item.id)} // Set hover state
            onMouseLeave={() => setHoveredId(null)} // Clear hover state
            onClick={() => handleItemClick(item.id, item.text)} // Set active state
            className={`flex items-center  justify-between py-2 px-3 rounded-full cursor-pointer transition ${
              activeId === item.id || hoveredId === item.id
                ? "bg-purple-100 text-blue-800"
                : "text-black hover:bg-purple-100 hover:text-blue-800"
            }`}
          >
            {/* Left Icon and Text */}
            <div className="flex items-center gap-2">
              {/* Message Icon always visible */}
              <BiMessageRounded  className={`${
                  activeId === item.id || hoveredId === item.id
                    ? "text-blue-800 text-xl "
                    : "text-black text-xl"
                }`} />
              
              <span>{item.text}</span>
            </div>

            {/* Edit and Delete Icons */}
            {(activeId === item.id || hoveredId === item.id) && (
              <div className="flex items-center gap-1">
                <BiEditAlt
                  className="text-black text-lg cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent parent click
                    handleEdit(item.id);
                  }}
                />
                <BsTrash
                  className=" text-black cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent parent click
                    handleDelete(item.id);
                  }}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
      <ul className="space-y-2 py-4">
      
         <h5 className="text-gray-500 px-3 py-2  ">Last 7 days</h5>

        {conversions7day.map((item) => (
          <li
            key={item.id}
            onMouseEnter={() => setHoveredId7day(item.id)} // Set hover state
            onMouseLeave={() => setHoveredId7day(null)} // Clear hover state
            onClick={() => handleItemClick7day(item.id, item.text)} // Set active state
            className={`flex items-center  justify-between py-2 px-3 rounded-full cursor-pointer transition ${
              activeId7day === item.id || hoveredId7day === item.id
                ? "bg-purple-100 text-blue-800"
                : "text-black hover:bg-purple-100 hover:text-blue-800"
            }`}
          >
            {/* Left Icon and Text */}
            <div className="flex items-center gap-2">
              {/* Message Icon always visible */}
              <BiMessageRounded  className={`${
                  activeId7day === item.id || hoveredId7day === item.id
                    ? "text-blue-800 text-xl"
                    : "text-black text-xl"
                }`} />
              
              <span>{item.text}</span>
            </div>

            {/* Edit and Delete Icons */}
            {(activeId7day === item.id || hoveredId7day === item.id) && (
              <div className="flex items-center gap-1">
                <BiEditAlt
                  className="text-black text-lg cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent parent click
                    handleEdit(item.id);
                  }}
                />
                <BsTrash
                  className=" text-black cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent parent click
                    handleDelete(item.id);
                  }}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
          </div>

        <div className=" text-black rounded-full flex items-center py-1 px-2 border border-gray-300">
            <button className="bg-gray-200 text-black  p-2  flex items-center justify-center rounded-full">
                <FiSettings className="" />
                 
            </button>
            <span className=" ms-2 font-medium text-sm">Settings</span>
        </div>

        <div className=" text-black rounded-full flex items-center relative -top-2 py-1 px-2 border border-gray-300">
            <button className="bg-gray-200 text-black    flex items-center justify-center rounded-full">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="rounded-full h-8 w-8" alt="user" />
                 
            </button>
            <span className=" ms-2 font-medium text-sm">Settings</span>
        </div>

        </nav>
      </div>
    </>
  );
};

export default Sidebar;

