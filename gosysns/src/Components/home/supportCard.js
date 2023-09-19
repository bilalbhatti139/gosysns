import React from "react";
import { BsTelephone } from "react-icons/bs";

const SupportCard = () => {
  return (
    <div className="">
      <div className="w-custom-container mx-0 sm:mx-auto md:mx-auto">
      {/* <h1 className="flex  text-3xl text-primary"> Warum GOSYNS?</h1> */}

        <div className="grid grid-cols-4  gap-4 py-4">
          <div className="rounded-md bg-primary2 shadow-lg border border-secondary  p-4 flex flex-col">
            <div className="flex items-center gap-4"> 
              <div>
                <BsTelephone className="text-green-400 text-[30px]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline"> 
                  <h2 className="text-md text-white font-semibold">
                    24/7 Support
                  </h2>
                  </div>
                  <div className="flex items-baseline">
                  <span className="text-primary text-white text-xs ">
                    Dashboard Token System 
                  </span>
                  </div>
              
              </div>
            </div>
            <p className="text-gray-600 mt-3 text-white text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div className="rounded-md bg-primary2 border-secondary border shadow-md p-4 flex flex-col">
            <div className="flex items-center gap-4"> 
              <div>
                <BsTelephone className="text-green-400 text-[30px]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline"> 
                  <h2 className="text-md text-white font-semibold">
                    24/7 Support
                  </h2>
                  </div>
                  <div className="flex items-baseline">
                  <span className="text-primary text-white text-xs ">
                    Dashboard Token System 
                  </span>
                  </div>
              
              </div>
            </div>
            <p className="text-gray-600 mt-3 text-white text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div className="rounded-md bg-primary2 border border-secondary shadow-md p-4 flex flex-col">
            <div className="flex items-center gap-4"> 
              <div>
                <BsTelephone className="text-green-400 text-[30px]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline"> 
                  <h2 className="text-md text-white font-semibold">
                    24/7 Support
                  </h2>
                  </div>
                  <div className="flex items-baseline">
                  <span className="text-primary text-white text-xs ">
                    Dashboard Token System 
                  </span>
                  </div>
              
              </div>
            </div>
            <p className="text-gray-600 text-white mt-3 text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
          <div className="rounded-md bg-primary2 border-secondary border shadow-md p-4 flex flex-col">
            <div className="flex items-center gap-4"> 
              <div>
                <BsTelephone className="text-green-400 text-[30px]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline"> 
                  <h2 className="text-md text-white font-semibold">
                    24/7 Support
                  </h2>
                  </div>
                  <div className="flex items-baseline">
                  <span className="text-primary text-white text-xs ">
                    Dashboard Token System 
                  </span>
                  </div>
              
              </div>
            </div>
            <p className="text-gray-600 text-white mt-3 text-xs">
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
