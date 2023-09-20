import React from "react";

const Button = () => {
  return (
    <div className='mt-20'>
    <div className="w-custom-container md:mx-auto  sm:mx-0 mx-0">
      <div className="flex flex-col ">
        <div className="flex">
          <h1 className="text-3xl text-white">
            <span className="text-primary">Bareit? </span>Lass uns Starten!
          </h1>
        </div>
        <div className="flex gap-4 ">
          <button className="bg-primary text-sm rounded-md px-10 text-white py-1">Registration</button>
          <button className='bg-white text-primary text-sm rounded-md px-10 py-1'>Login</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Button;