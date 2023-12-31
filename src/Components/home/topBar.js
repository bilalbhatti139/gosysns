import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
const TopBar = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-screen-lg mx-auto flex items-center justify-center py-2 text-xl">
        <BsArrowReturnRight className="text-white" />
        <span className="text-white ml-2">
          Jefre Vertughar Valheim GameServer
        </span>
      </div>
    </div>
  );
};

export default TopBar;
