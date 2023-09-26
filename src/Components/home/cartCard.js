import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BiSolidCart } from "react-icons/bi";

const CartCard = () => {
  return (
    <div className="mt-20">
      <div className="max-w-screen-lg mx-0 sm:mx-auto md:mx-auto">
        <div className="flex flex-col justify-center items-center mx-10 mt-40">
          <h1 className="font-bold  text-5xl text-white">
            <span className="text-primary">Go </span>Syns in zahlen!
          </h1>
          <p className="flex text-4xl text-[#89939B] mt-2">
            ZAHLEN Sahgen Mehr at trosode Worte!
          </p>
        </div>

        <div className=" flex flex-col md:flex-row items-center justify-around py-6 gap-10 md:gap-0">
          <div className="rounded-md  bg-primary2 shadow-lg border border-secondary items-center py-5 px-8 w-fit  ">
            <div className="flex justify-between gap-4  items-center ">
              <div className="flex">
                <FaUserAlt className="text-white text-[60px]" />
              </div>
              <div className="flex flex-col">
                <div className="flex ">
                  <h2 className="text-4xl text-primary ">+300</h2>
                </div>
                <div className="flex ">
                  <span className="text-left text-[#89939B] text-2xl ">
                    Registered <br />
                    Products
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-md bg-primary2 shadow-lg border border-secondary items-center py-5 px-8 w-fit">
            <div className="flex  justify-between gap-4 items-center ">
              <div className="flex">
                <BiSolidCart className="text-white text-[60px]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <h2 className="text-4xl text-primary ">+100</h2>
                </div>
                <div className="flex ">
                  <span className="text-left text-[#89939B] text-2xl ">
                    Registered <br />
                    Products
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-md bg-primary2 shadow-lg border border-secondary items-center py-5 px-8 w-fit">
            <div className="flex  justify-between gap-4 items-center ">
              <div className="flex">
                <BiSolidCart className="text-white text-[60px]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <h2 className="text-4xl text-primary ">+100</h2>
                </div>
                <div className="flex ">
                  <span className="text-left text-[#89939B] text-2xl">
                    Registered <br />
                    Products
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
