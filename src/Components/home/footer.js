  import React from "react";
  import logo from "../../assets/logo.png";
  const Footer = () => {
    return (
      <div className="mt-20">
        <div className="bg-primary2 text-white p-8 pb-[65px]">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] ">
              <div className="flex items-center flex-col px-14">
                <img src={logo} alt="pic" className="h-[40px]  " />
                <h1 className="font-bold text-2xl">
                  <span className="text-primary">Go</span>Syns
                </h1>

                <p className="text-md text-[#89939B] mt-2 px-10">
                  Dev Provider fur Service Producto odrer so ich wobas noch nicht
                  lass mich in runhe ALEx!
                </p>
              </div>
              <div className="grid grid-cols-[1fr_1fr_1fr_1fr] mt-5">
                {[1, 1, 1, 1].map((item) => (
                  <div className=" flex flex-col items-start">
                    <h1 className="text-2xl  text-[#fff] font-semibold">
                      Rechtiliches
                    </h1>
                    <div className="w-20 border-b-4 border-primary my-1"></div>

                    <p className="text-[#89939B]">impression</p>
                    <p className="text-[#89939B]">impression</p>
                    <p className="text-[#89939B]">impression</p>
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
