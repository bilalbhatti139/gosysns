import React from "react";
import { BiSolidServer } from "react-icons/bi";

const Card = () => {
  return (
    <div className="">
      <div className="max-w-screen-lg  mx-0 sm:mx-0 md:mx-auto">
       
        <div className="grid grid-cols-4 border  bg-[#EBEBEB] shadow-md gap-4 rounded-2xl p-4">
          <div className="border-r-2 border-primary p-4 flex items-center flex-col">
            <BiSolidServer className="text-primary text-5xl" />
            <h2 className="text-lg  font-bold">Root Server</h2>
            <p className="text-gray-600 text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              and scrambled it to make a type specimen book.
            </p>
            <span className="text-xs mt-4">
              Root Server
              <span className="text-primary text-xs"> Best Plan</span>
            </span>
          </div>
          <div className="border-r-2 border-primary p-4 flex items-center flex-col">
            <BiSolidServer className="text-primary text-5xl" />
            <h2 className="text-lg  font-bold">Gameserver</h2>
            <p className="text-gray-600 text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              and scrambled it to make a type specimen book.
            </p>
            <span className="text-xs mt-4">
              Gameserver
              <span className="text-primary text-xs"> Best Plan</span>
            </span>
          </div>
          <div className="border-r-2 border-primary p-4 flex items-center flex-col">
            <BiSolidServer className="text-primary text-5xl" />
            <h2 className="text-lg  font-bold">Dedicated Server</h2>
            <p className="text-gray-600 text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              and scrambled it to make a type specimen book.
            </p>
            <span className="text-xs mt-4">
              Dedicated Server
              <span className="text-primary text-xs"> Best Plan</span>
            </span>
          </div>
          <div className="  p-4 flex items-center flex-col">
            <BiSolidServer className="text-primary text-5xl" />
            <h2 className="text-lg  font-bold">Domains</h2>
            <p className="text-gray-600 text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              and scrambled it to make a type specimen book.
            </p>
            <span className="text-xs mt-4">
              Domains <span className="text-primary text-xs"> Best Plan</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
