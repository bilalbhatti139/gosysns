import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import icon from "../../assets/Icons/phone.svg";

const SupportCard = () => {
  return (
    <div className="mt-72">
      <div className="max-w-screen-lg mx-0 sm:mx-auto md:mx-auto">
        {/* <h1 className="flex  text-3xl text-primary"> Warum GOSYNS?</h1> */}
        <div className="relative">
          <h1 className="flex  text-3xl text-white font-bold">Warum GoSyns?</h1>
          <div className="absolute md:block hidden bottom-0  w-36 border-b-4 border-primary"></div>
        </div>
        <div className="grid grid-cols-4 py-10 gap-4 ">
          <div className="rounded-md bg-primary2 shadow-lg border border-secondary  p-4 flex flex-col">
            <div className="flex items-center gap-4">
              <div>
                <BsFillTelephoneFill className="text-primary text-[40px]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <h2 className="text-lg text-white font-semibold">
                    24/7 Support
                  </h2>
                </div>
                <div className="flex items-baseline">
                  <span className="text-primary text-[#C0C0C0] text-xs ">
                    Dashboard Token System
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mt-3 text-[#C0C0C0] text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div className="rounded-md bg-primary2 border-secondary border shadow-md p-4 flex flex-col">
            <div className="flex items-center gap-4">
              <div>
                <BsFillTelephoneFill className="text-primary text-[40px]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <h2 className="text-lg text-white font-semibold">
                    24/7 Support
                  </h2>
                </div>
                <div className="flex items-baseline">
                  <span className="text-primary text-[#C0C0C0] text-xs ">
                    Dashboard Token System
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mt-3 text-[#C0C0C0] text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div className="rounded-md bg-primary2 border border-secondary shadow-md p-4 flex flex-col">
            <div className="flex items-center gap-4">
              <div>
                <BsFillTelephoneFill className="text-primary text-[40px]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <h2 className="text-lg text-white font-semibold">
                    24/7 Support
                  </h2>
                </div>
                <div className="flex items-baseline">
                  <span className="text-primary text-[#C0C0C0] text-xs ">
                    Dashboard Token System
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-[#C0C0C0] mt-3 text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div className="rounded-md bg-primary2 border-secondary border shadow-md p-4 flex flex-col">
            <div className="flex items-center gap-4">
              <div>
                <BsFillTelephoneFill className="text-primary text-[40px]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <h2 className="text-lg text-white font-semibold">
                    24/7 Support
                  </h2>
                </div>
                <div className="flex items-baseline">
                  <span className="text-primary text-[#C0C0C0] text-xs ">
                    Dashboard Token System
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-[#C0C0C0] mt-3 text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportCard;
