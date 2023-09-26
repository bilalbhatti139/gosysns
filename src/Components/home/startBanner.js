import React from "react";
import banner from "../../assets/4.jpg";
import logo from "../../assets/star.png";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalfStroke } from "react-icons/fa6";

const StarBanner = () => {
  const backgroundImageUrl = banner;

  return (
    <div className="mt-20">
      <div className="grid lg:grid-cols-2  sm:grid-cols-1 grid-cols-1 justify-center items-center h-full">
        <div
          className={`bg-cover bg-center bg-primary h-52 flex justify-center custom-clip-path `}
        >
          <div className="text-white justify-center items-center text-2xl flex">
            <div className="flex flex-col items-start ">
              <span className="text-4xl font-bold">Das denken unsere</span>
              <span className=" text-4xl font-bold">Kunden über uns!</span>
              <p className="text-sm">
                We legen hochestan Wert auf Kundzenurfnedrenheit
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-10 lg:mt-0">
          <div className="flex text-white text-2xl">
            <div className="flex items-center justify-center">
              <img src={logo} alt="pic" className="w-[50%]" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex text-3xl">
              <AiFillStar className="text-primary" />
              <AiFillStar className="text-primary" />
              <AiFillStar className="text-primary" />
              <AiFillStar className="text-primary" />
              <FaStarHalfStroke className="text-primary" />
            </div>
            <div className="flex text-center justify-center flex-start text-white text-[20px]">
              <span className="">3.8 out of 5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarBanner;
