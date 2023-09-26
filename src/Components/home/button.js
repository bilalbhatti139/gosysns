import React from "react";

const Button = () => {
  return (
    <div className="mt-20">
      <div className="max-w-screen-lg md:mx-auto  sm:mx-0 mx-0">
        <div className="flex flex-col items-center">
          <div className="flex mx-10 md:mx-0">
            <h1 className="text-4xl font-semibold text-white">
              <span className="text-primary font-semibold">Bareit? </span>
              <span className="text-white font-medium">Lass uns Starten!</span>
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-3">
            <button className="bg-primary text-xl rounded-md px-5 text-white min-w-[170px] py-1 font-semibold">
              Registration
            </button>
            <button className="bg-white text-primary text-xl rounded-md px-5 py-1 w-[170px] font-semibold">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Button;
