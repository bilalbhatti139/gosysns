import React from "react";
import { BiSolidServer } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa6";

const Card = () => {
  return (
    <div className="">
      <div className="max-w-screen-lg  mx-0 sm:mx-0 md:mx-auto">
        <div className="grid grid-cols-4  bg-[#091E2E] shadow-md gap-4 rounded-2xl px-4 py-8">
          <div className="border-r-2 border-primary py-4 flex items-center flex-col">
            <BiSolidServer className="text-primary text-5xl" />
            <h2 className="text-2xl  font-semibold text-[#fff]">RootServer</h2>
            <p className="text-[#89939B] text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <span className="text-ld mt-4 font-semibold text-[#fff]">
              Root Server
              <span className="text-primary text-lg"> Best Plan</span>
            </span>
          </div>
          <div className="border-r-2 border-primary py-4 flex items-center flex-col">
            <FaGamepad className="text-primary text-5xl" />
            <h2 className="text-2xl  font-bold text-[#fff]">Gameserver</h2>
            <p className="text-[#89939B] text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <span className="text-lg mt-4 font-semibold text-[#fff]">
              Gameserver
              <span className="text-primary text-lg"> Best Plan</span>
            </span>
          </div>
          <div className="border-r-2 border-primary py-4 flex items-center flex-col">
            <BiSolidServer className="text-primary text-5xl" />
            <h2 className="text-2xl  font-bold text-[#fff]">
              Dedicated Server
            </h2>
            <p className="text-[#89939B] text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <span className="text-lg mt-4 font-semibold text-[#fff]">
              Dedicated Server
              <span className="text-primary text-lg"> Best Plan</span>
            </span>
          </div>
          <div className="  py-4 flex items-center flex-col">
            <FaGamepad className="text-primary text-5xl" />
            <h2 className="text-2xl  font-bold text-[#fff]">Domains</h2>
            <p className="text-[#89939B] text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <span className="text-lg mt-4 font-semibold text-[#fff]">
              Domains <span className="text-primary text-lg"> Best Plan</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
