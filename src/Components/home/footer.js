import React from "react";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="mt-20">
      <div className="bg-primary2 text-white p-8 md:px-0 pb-[65px]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] ">
            <div className="flex items-center flex-col pl-14 pr-14 sm:px-0 md:pl-0 ">
              <img src={logo} alt="pic" className="h-[60px]  " />
              <h1 className="font-bold text-4xl">
                <span className="text-primary">Go</span>Syns
              </h1>

              <p className="text-xl text-[#89939B] mt-2 px-10 md:px-10">
                Dev Provider fur Service Producto odrer so ich wobas noch nicht
                lass mich in runhe ALEx!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 mt-5 gap-5">
              {[1, 1, 1, 1].map((item) => (
                <div className=" flex flex-col items-start">
                  <h1 className="text-3xl  text-[#fff] font-semibold">
                    Rechtiliches
                  </h1>
                  <div className="w-20 border-b-4 border-primary my-1 "></div>

                  <p className="text-[#89939B] text-xl">impression</p>
                  <p className="text-[#89939B] text-xl">impression</p>
                  <p className="text-[#89939B] text-xl">impression</p>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="mt-20 text-center">
              &copy; {new Date().getFullYear()} Company Name. All rights reserved.
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
