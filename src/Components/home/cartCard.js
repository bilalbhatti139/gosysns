import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BiSolidCart } from "react-icons/bi";

const CartCard = () => {
  return (
    <div className="mt-20">
      <div className="max-w-screen-lg mx-0 sm:mx-auto md:mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h1 className="flex font-bold  text-4xl text-white">
            <span className="text-primary">Go </span>Syns in zahlen!
          </h1>
          <p className="flex text-[24px] text-[#C0C0C0]">
            ZAHLEN Sahgen Mehr at trosode Worte!
          </p>
        </div>

        <div className="grid grid-cols-3   gap-32 py-4">
          <div className="rounded-md  bg-primary2 shadow-lg border border-secondary items-center py-4 px-8 max-w-[200px]  ">
            <div className="flex justify-between  items-center ">
              <div className="flex">
                <FaUserAlt className="text-white text-[40px]" />
              </div>
              <div className="flex flex-col">
                <div className="flex ">
                  <h2 className="text-3xl text-primary ">+300</h2>
                </div>
                <div className="flex ">
                  <span className="text-left text-[#C0C0C0] text-[14px] ">
                    Registered <br />
                    Products
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-md bg-primary2 shadow-lg border border-secondary items-center py-4 px-8 max-w-[200px]">
            <div className="flex  justify-between items-center ">
              <div className="flex">
                <BiSolidCart className="text-white text-[50px]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <h2 className="text-3xl text-primary ">+100</h2>
                </div>
                <div className="flex ">
                  <span className="text-left text-[#C0C0C0] text-[14px] ">
                    Registered <br />
                    Products
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-md bg-primary2 shadow-lg border border-secondary items-center py-4 px-8 max-w-[200px]">
            <div className="flex  justify-between items-center ">
              <div className="flex">
                <BiSolidCart className="text-white text-[50px]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <h2 className="text-3xl text-primary ">+100</h2>
                </div>
                <div className="flex ">
                  <span className="text-left text-[#C0C0C0] text-[14px] ">
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
