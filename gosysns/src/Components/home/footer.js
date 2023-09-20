import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
    <div className="bg-secondary text-white p-8">
      <div className="w-custom-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 ">
          <div>
            <h1 className="text-2xl text-primary font-semibold">GOSYSNS</h1>

            <p className="text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div>
            <div className="relative">
              <h1 className="text-2xl  text-primary font-semibold">
                Rechtiliches
              </h1>
              <div className="absolute md:block hidden bottom-0 left-[4rem] w-20 border-b-2 border-primary"></div>
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
              <div className="absolute md:block hidden bottom-0 left-[4rem] w-20 border-b-2 border-primary"></div>
            </div>

            <p>impression</p>
            <p>impression</p>
            <p>impression</p>

          </div>
          <div>
            <div className="relative">
              <h1 className="text-2xl  text-primary font-semibold">Uber Uns</h1>
              <div className="absolute md:block hidden bottom-0 left-[5rem] w-20 border-b-2 border-primary"></div>
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
