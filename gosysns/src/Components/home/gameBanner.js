import React from "react";
import banner from "../../assets/1.jpg";
import logo from "../../assets/3.PNG";

const GameBanner = () => {
  const backgroundImageUrl = banner;

  return (
    <div className="mt-20">
      <div
        className={`bg-cover bg-center h-60`}
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="w-custom-container mx-0 sm:mx-0 md:mx-auto h-full flex justify-between items-center">
          <div className="text-white text-3xl text-left flex flex-col">
            <span className="text-primary">GameServer</span>
            <span className="text-white text-2xl">benefits ab 250$ in Monat</span>
            <span className="mt-4 text-2xl">Uber 25 direct Installbar !</span>
          </div>

          <div className="flex items-center justify-end">
            <img src={logo} alt="Your Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBanner;
