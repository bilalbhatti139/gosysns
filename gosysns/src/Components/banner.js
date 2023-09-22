import React from "react";
import banner from "../assets/cover.jpg";
import logo from "../assets/NukeHostLogo.png";
const Banner = () => {
  const backgroundImageUrl = banner;

  return (
    <div
      className={`bg-cover relative bg-center  custombackground  h-[500px] `}
    
    >
      <div className="flex justify-between   max-w-screen-lg md:mx-auto sm:grid-cols-1 grid-cols-1  items-center h-full">
        <div className="text-white text-4xl text-left  flex flex-col">
          <span className="font-medium">WILLKOMMEN</span>
          <span className="font-bold">
            <span className="text-primary font-bold"> GO</span>SYNX.COM
          </span>
          <div className="flex flex-col font-light mt-4">
            <span>Schnell.</span>
            <span>Funktional.</span>
            <span>Gunstig.</span>
          </div>
        </div>
        <div className="flex  items-center  justify-center bg-primary"
         style={{
          clipPath: 'ellipse(40% 39% at 49% 50%)',
        }}>
          <img
            src={logo}
            alt="Your Image"
            
          />
        </div>
        
      </div>
      
    </div>
  );
};

export default Banner;
