import React from "react";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="mt-20">
      <div className="bg-primary2 text-white p-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 ">
            <div className="flex items-center flex-col">
            <img src={logo} alt="pic" className="h-[40px]  " />
              <h1 className="font-bold text-2xl">
                <span className="text-primary">GO</span>Syns
              </h1>
            
              <p className="text-xs mt-2 px-20">
                Dev Provider fur Service Producto odrer so ich wobas noch nicht
                lass mich in runhe ALEx!
              </p>
            </div>
            <div>
              <div className="relative">
                <h1 className="text-2xl  text-primary font-semibold">
                  Rechtiliches
                </h1>
                <div className="absolute md:block hidden bottom-0 left-[8rem] w-20 border-b-2 border-primary"></div>
              </div>

              <p>impression</p>
              <p>impression</p>
              <p>impression</p>
            </div>
            <div>
              <div className="relative">
                <h1 className="text-2xl  text-primary font-semibold">
                  Rechtiliches
                </h1>
                <div className="absolute md:block hidden bottom-0 left-[8rem] w-20 border-b-2 border-primary"></div>
              </div>

              <p>impression</p>
              <p>impression</p>
              <p>impression</p>
            </div>
            <div>
              <div className="relative">
                <h1 className="text-2xl  text-primary font-semibold">
                  Uber Uns
                </h1>
                <div className="absolute md:block hidden bottom-0 left-[9rem] w-20 border-b-2 border-primary"></div>
              </div>

              <p>impression</p>
              <p>impression</p>
              <p>impression</p>
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
