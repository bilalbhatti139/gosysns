import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/logo.png";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-blue py-0 md:py-4">
      <div className="max-w-screen-lg	 mx-0 sm:mx-0 md:mx-auto">
        {/* The Navbar content */}
        <div className="md:flex inline-block md:justify-between items-center">
          <div className="md:flex inline-block items-center">
            <div className="text-[#45FFCA]  font-bold text-xl">
              <img src={logo} alt="pic" className="h-[40px]" />
            </div>
            <div className="md:hidden block">
              <button onClick={toggleMenu} className="text-white">
                <AiOutlineMenu className="h-6 w-6" />
              </button>
              {isOpen && (
                <div className="mt-4 flex flex-col gap-4  ">
                  <a href="#" className="text-white  ">
                    RootServer
                  </a>
                  <a href="#" className="text-white ">
                    GameServer
                  </a>
                  <a href="#" className="text-white ">
                    Dedicated Server
                  </a>
                  <a href="#" className="text-white ">
                    Webhosting
                  </a>
                  <a href="#" className="text-white ">
                    Über Uns
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="hidden md:flex text-sm space-x-8">
            <a href="#" className="text-white text-base font-bold ">
              RootServer
            </a>
            <a href="#" className="text-white text-base font-bold ">
              GameServer
            </a>
            <a href="#" className="text-white text-base font-bold ">
              Dedicated Server
            </a>
            <a href="#" className="text-white text-base font-bold ">
              Webhosting
            </a>
            <a href="#" className="text-white text-base font-bold ">
              Über Uns
            </a>
          </div>
          <div className="md:flex hidden sm:hidden justify-between items-center">
            <button className="text-white px-4 text-sm rounded-md py-1 bg-primary">
              <span className="flex items-center">
                <FaUserAlt className="text-white  mr-1 text-base font-bold" />
                <span className="text-base flex items-center font-bold">
                  LOGIN
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
