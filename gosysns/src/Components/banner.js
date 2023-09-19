import React from "react";
import banner from "../assets/1.jpg";
import logo from "../assets/3.PNG";
const Banner = () => {
  const backgroundImageUrl = banner;

  return (
    <div
      className={`bg-cover  bg-center h-96`}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >

      <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 justify-center items-center h-full">
        <div className="text-white text-2xl flex flex-col">
          <span>WILLKOMMEN</span>
          <span>
            <span className="text-green-500"> GO</span> SYNX.COM
          </span>
          <span>Schnell.</span>
          <span>Funktional.</span>
          <span>Gunstig</span>
        </div>
        <div className="flex  items-center justify-center">
          <img src={logo} alt="Your Image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
