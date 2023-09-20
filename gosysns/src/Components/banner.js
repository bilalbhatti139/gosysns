import React from "react";
import banner from "../assets/1.jpg";
import logo from "../assets/3.PNG";
const Banner = () => {
  const backgroundImageUrl = banner;

  return (
    <div
      className={`bg-cover relative bg-center  h-[500px]`}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
        

      <div className="flex justify-between w-custom-container md:mx-auto sm:grid-cols-1 grid-cols-1  items-center h-full">
        <div className="text-white text-3xl text-left  flex flex-col">
          <span>WILLKOMMEN</span>
          <span>
            <span className="text-green-500"> GO</span> SYNX.COM
          </span>
          <div className="flex flex-col mt-4">
          <span>Schnell.</span>
          <span>Funktional.</span>
          <span>Gunstig</span>
          </div>
        </div>
        <div className="flex  items-center justify-center">
          <img src={logo} alt="Your Image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
