import React from "react";
import banner from "../assets/cover.jpg";
import logo from "../assets/headerphoto.png";
const Banner = () => {
  const backgroundImageUrl = banner;

  return (
    <div
      className={`bg-cover relative bg-center  custombackground  h-[500px] `}
    >
      <div className="flex justify-between   max-w-screen-lg md:mx-auto sm:grid-cols-1 grid-cols-1  items-center h-full">
        <div className="text-white text-5xl text-left  flex flex-col">
          <span className="font-medium">WILLKOMMEN</span>
          <span className="font-bold">
            <span className="text-primary font-bold"> GO</span>SYNS.COM
          </span>
          <div className="flex flex-col font-light mt-4">
            <span>Schnell.</span>
            <span>Funktional.</span>
            <span>Gunstig.</span>
          </div>
        </div>
        <div className="flex  items-center  justify-center">
          <img src={logo} alt="Your Image" className="w-[600px]" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
