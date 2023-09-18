import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-blue  py-4">
      <div className="container mx-0 sm:mx-0 md:mx-auto">
        {/* The Navbar content */}
        <div className="flex md:justify-evenly items-center">
          <div className="flex items-center">
            <div className="text-[#45FFCA] font-bold text-xl">LOGO</div>
          </div>
          <div className="hidden md:flex text-sm space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              RootServer
            </a>
            <a href="#" className="text-white text-sm hover:text-gray-300">
              GameServer
            </a>
            <a href="#" className="text-white text-sm hover:text-gray-300">
              Dedicated Server
            </a>
            <a href="#" className="text-white text-sm hover:text-gray-300">
              Webhosting
            </a>
            <a href="#" className="text-white text-sm hover:text-gray-300">
              Über Uns
            </a>
          </div>
          <div className="md:flex hidden sm:hidden items-center">
            <button className="text-white px-5 text-sm rounded-md py-1 bg-[#45FFCA]">
              <span>
                <BiUser className="text-white inline-block mr-2" /> LOGIN
              </span>
            </button>
          </div>
        </div>
        {/* Mobile responsive menu */}
        <div className="md:hidden flex justify-end">
          <button onClick={toggleMenu} className="text-white">
            <AiOutlineMenu className="h-6 w-6" />
          </button>
          {isOpen && (
            <div className="mt-4 flex flex-col gap-4  ">
              <a href="#" className="text-white  hover:text-gray-300">
                RootServer
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                GameServer
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Dedicated Server
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Webhosting
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                Über Uns
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
