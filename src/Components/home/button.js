import React from "react";

const Button = () => {
  return (
    <div className="mt-20">
      <div className="max-w-screen-lg md:mx-auto  sm:mx-0 mx-0">
        <div className="flex flex-col ">
          <div className="flex">
            <h1 className="text-4xl font-semibold text-white">
              <span className="text-primary font-semibold">Bareit? </span>
              <span className="text-white font-medium">Lass uns Starten!</span>
            </h1>
          </div>
          <div className="flex gap-4 mt-3">
            <button className="bg-primary text-md rounded-md px-10 text-white py-1 font-semibold">
              Registration
            </button>
            <button className="bg-white text-primary text-md rounded-md px-10 py-1 font-semibold">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Button;
