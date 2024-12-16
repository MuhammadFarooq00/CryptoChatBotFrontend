
import { IoMenu } from "react-icons/io5";

const Navbar = ({ setSidebarOpen }) => {
  return (
    <header className="flex items-center p-5 bg-white shadow-md lg:hidden">
      <IoMenu
        className="text-2xl cursor-pointer"
        onClick={() => setSidebarOpen(true)}
      />
      <h1 className="ml-4 text-xl font-bold">CHAT A.I+</h1>
    </header>
  );
};

export default Navbar;
