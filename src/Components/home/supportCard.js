import React from "react";

import { BsTelephoneFill } from "react-icons/bs";

import { BsLaptop } from "react-icons/bs";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { BiSolidServer } from "react-icons/bi";

const SupportCard = () => {
  return (
    <div className="mt-96">
      <div className="max-w-screen-lg mx-0 sm:mx-auto md:mx-auto">
        {/* <h1 className="flex  text-3xl text-primary"> Warum GOSYNS?</h1> */}
        <div className="relative">
          <h1 className="flex  text-3xl text-white font-bold">Warum GoSyns?</h1>
          <div className="absolute md:block hidden bottom-[-5px]  w-36 border-b-4 border-primary"></div>
        </div>
        <div className="grid grid-cols-4 py-10 gap-16 ">
          <div className="rounded-md bg-primary2 shadow-lg border border-secondary  p-4 flex flex-col">
            <div className="flex items-start gap-4">
              <div>
                <BsTelephoneFill className="text-primary text-[35px] mt-2" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <h2 className="text-lg text-white font-semibold">
                    24/7 Support
                  </h2>
                </div>
                <div className="flex items-baseline">
                  <span className="text-left text-[#89939B] text-xs ">
                    Dashboard Token System
                  </span>
                </div>
              </div>
            </div>
            <p className=" mt-3 text-[#89939B] text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="rounded-md bg-primary2 border-secondary border shadow-md p-4 flex flex-col">
            <div className="flex items-start gap-4">
              <div>
                <FaMoneyCheckDollar className="text-primary text-[40px]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <h2 className="text-lg text-white font-semibold">
                    100% Prepaid
                  </h2>
                </div>
                <div className="flex items-baseline">
                  <span className="text-left text-[#89939B] text-xs ">
                    Dashboard Token System
                  </span>
                </div>
              </div>
            </div>
            <p className=" mt-3 text-[#89939B] text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="rounded-md bg-primary2 border border-secondary shadow-md p-4 flex flex-col">
            <div className="flex items-start gap-4">
              <div>
                <BiSolidServer className="text-primary text-[40px]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <h2 className="text-lg text-white font-semibold">Hardware</h2>
                </div>
                <div className="flex items-baseline">
                  <span className="text-left text-[#89939B] text-xs ">
                    Dashboard Token System
                  </span>
                </div>
              </div>
            </div>
            <p className=" text-[#89939B] mt-3 text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="rounded-md bg-primary2 border-secondary border shadow-md p-4 flex flex-col">
            <div className="flex items-start gap-4">
              <div>
                <BsLaptop className="text-primary text-[40px]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <h2 className="text-lg text-white font-semibold">
                    Interface
                  </h2>
                </div>
                <div className="flex items-baseline">
                  <span className="text-left  text-[#89939B] text-xs ">
                    Dashboard Token System
                  </span>
                </div>
              </div>
            </div>
            <p className=" text-[#89939B] mt-3 text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportCard;
