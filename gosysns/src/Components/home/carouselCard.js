import React from "react";
import { AiFillStar } from "react-icons/ai";

const CarouselCard = () => {
  return (
    <div className=" ">
      
          <div className="p-4 rounded-lg bg-secondary flex items-center flex-col">
            <AiFillStar className="text-green-400 text-3xl" />
            <h2 className="text-md mt-4 text-white font-semibold">Sehr guter Hoster</h2>
            <p className="text-white text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              and scrambled it to make a type specimen book.
            </p>
            <span className="text-xs text-white mt-4">
              Root Server
              <div className="flex mt-4 text-xl">
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
