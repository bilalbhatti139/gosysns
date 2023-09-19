import React from "react";
import banner from "../../assets/1.jpg";
import logo from "../../assets/3.PNG";
const GameBanner = () => {
  const backgroundImageUrl = banner;

  return (
    <div
      className={`bg-cover  bg-center h-40`}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="grid md:grid-cols-2  sm:grid-cols-1 grid-cols-1 justify-center items-center h-full">
        <div className="text-white text-2xl flex flex-col">
          <span className="text-primary">GameServer</span>
          <span className="text-white text-lg">benefits ab 250$ in Monat</span>
          <span className="mt-4 text-sm">Uber 25 direct Installbar !</span>
        </div>
        <div className="flex  items-center justify-center">
          <img src={logo} alt="Your Image" />
        </div>
      </div>
    </div>
  );
};

export default GameBanner;
