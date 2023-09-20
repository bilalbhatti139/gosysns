import React from "react";
import { BiUser } from "react-icons/bi";

const Card = () => {
  return (
    <div className="">
      <div className="w-custom-container  mx-0 sm:mx-0 md:mx-auto">
       
        <div className="grid grid-cols-4 border  bg-white shadow-md gap-4 rounded-md p-4">
          <div className="border-r border-green-700 p-4 flex items-center flex-col">
            <BiUser className="text-green-400" />
            <h2 className="text-md font-semibold">Root Server</h2>
            <p className="text-gray-600 text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              and scrambled it to make a type specimen book.
            </p>
            <span className="text-xs mt-4">
              Root Server{" "}
              <span className="text-primary text-xs"> Best Plan</span>
            </span>
          </div>
          <div className="border-r border-green-700 p-4 flex items-center flex-col">
            <BiUser className="text-green-400" />
            <h2 className="text-md font-semibold">Game Server</h2>
            <p className="text-gray-600 text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              and scrambled it to make a type specimen book.
            </p>
            <span className="text-xs mt-4">
              Game Server{" "}
              <span className="text-primary text-xs"> Best Plan</span>
            </span>
          </div>{" "}
          <div className="border-r border-green-700 p-4 flex items-center flex-col">
            <BiUser className="text-green-400" />
            <h2 className="text-md font-semibold">Dedicated Server</h2>
            <p className="text-gray-600 text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              and scrambled it to make a type specimen book.
            </p>
            <span className="text-xs mt-4">
              Dedicated Server
              <span className="text-primary text-xs"> Best Plan</span>
            </span>
          </div>{" "}
          <div className="  p-4 flex items-center flex-col">
            <BiUser className="text-green-400" />
            <h2 className="text-md font-semibold">Domains</h2>
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
