import React from "react";
import { AiFillStar } from "react-icons/ai";
import { IoStarSharp } from "react-icons/io5";

const CarouselCard = () => {
  return (
    <div className="shadow-xl bg-[#091E2E] rounded-lg ">
      <div className="p-4 rounded-lg flex items-center flex-col">
        <IoStarSharp className="text-primary text-4xl" />
        <h2 className="text-lg mt-4 text-[#C0C0C0] font-semibold">
          Sehr guter Hoster
        </h2>
        <p className="text-[#C0C0C0] text-md mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text and
          scrambled it to make a type specimen book.
        </p>
        <span className="text-md text-[#C0C0C0] mt-4">
          RootServer
          <div className="flex mt-4 text-2xl">
            <AiFillStar className="text-primary" />
            <AiFillStar className="text-primary" />
            <AiFillStar className="text-primary" />
            <AiFillStar className="text-primary" />
            <AiFillStar className="text-primary" />
          </div>
        </span>
      </div>
    </div>
  );
};

export default CarouselCard;
