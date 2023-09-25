import React from "react";
// import banner from "../../assets/banner.jpg";
import logo from "../../assets/jay.png";

const GameBanner = () => {
  return (
    <div className="mt-20">
      <div
        className={`bg-cover bg-center h-60 custombackground-2`}
        // style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="max-w-screen-lg mx-0 sm:mx-0 md:mx-auto h-full flex justify-between items-center">
          <div className="text-white text-4xl text-left flex flex-col">
            <span className="text-primary font-bold">GameServer</span>
            <span className="text-[#89939B] text-3xl">
              benefits ab 250$ in Monat
            </span>
            <span className="mt-4 text-[#89939B] text-3xl">
              Uber 25 Spiele direct Installbar !
            </span>
          </div>

          <div className="flex items-center justify-end">
            <img src={logo} className="h-[270px] mt-6" alt="Your Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBanner;
