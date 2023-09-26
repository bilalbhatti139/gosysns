import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import img from "../../assets/Curved.png";
const EndBar = () => {
  return (
    <div className="bg-secondary relative">
      <img src={img} className="absolute w-100vw top-[-55px]" />
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center">
        <div className="flex gap-4">
          <BsDiscord className="text-primary text-[50px]" />
          <AiFillInstagram className="text-primary text-[50px]" />
          <FaXTwitter className="text-primary text-[50px]" />
        </div>
        <span className="text-white text-lg mt-2">
          <span className="text-primary">@</span> 2021-2023{" "}
          <span className="text-primary">Go</span>Syns isnt ein Label won
          Alexandar Ferghert (GoWebMedia)
        </span>

        <span className="text-white text-md mb-2">
          url GoSyns isnt ein Label won Alexandar Ferghert (GoWebMedia)
        </span>
      </div>
    </div>
  );
};

export default EndBar;
