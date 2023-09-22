import React from "react";
import { BiSolidServer } from "react-icons/bi";

const Card = () => {
  return (
    <div className="">
      <div className="max-w-screen-lg  mx-0 sm:mx-0 md:mx-auto">
        <div className="grid grid-cols-4 border  bg-[#EBEBEB] shadow-md gap-4 rounded-2xl p-4">
          <div className="border-r-2 border-primary py-4 flex items-center flex-col">
            <BiSolidServer className="text-primary text-5xl" />
            <h2 className="text-lg  font-bold">RootServer</h2>
            <p className="text-gray-600 text-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <span className="text-md mt-4 font-semibold">
              Root Server
              <span className="text-primary text-md"> Best Plan</span>
            </span>
          </div>
          <div className="border-r-2 border-primary py-4 flex items-center flex-col">
            <BiSolidServer className="text-primary text-5xl" />
            <h2 className="text-lg  font-bold">Gameserver</h2>
            <p className="text-gray-600 text-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <span className="text-md mt-4 font-semibold">
              Gameserver
              <span className="text-primary text-md"> Best Plan</span>
            </span>
          </div>
          <div className="border-r-2 border-primary py-4 flex items-center flex-col">
            <BiSolidServer className="text-primary text-5xl" />
            <h2 className="text-lg  font-bold">Dedicated Server</h2>
            <p className="text-gray-600 text-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <span className="text-md mt-4 font-semibold">
              Dedicated Server
              <span className="text-primary text-md"> Best Plan</span>
            </span>
          </div>
          <div className="  py-4 flex items-center flex-col">
            <BiSolidServer className="text-primary text-5xl" />
            <h2 className="text-lg  font-bold">Domains</h2>
            <p className="text-gray-600 text-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <span className="text-md mt-4 font-semibold">
              Domains <span className="text-primary text-md"> Best Plan</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
