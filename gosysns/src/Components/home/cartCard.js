import React from "react";
import {AiOutlineUser} from 'react-icons/ai';
import {BsCartDash} from 'react-icons/bs';

const CartCard = () => {
  return (
    <div className="">
      <div className="w-custom-container mx-0 sm:mx-auto md:mx-auto">
      {/* <h1 className="flex  text-3xl text-primary"> Warum GOSYNS?</h1> */}

        <div className="grid grid-cols-3   gap-32 py-4">
          <div className="rounded-md  bg-primary2 shadow-lg border border-secondary items-center py-8   flex flex-col">
            <div className="flex   items-center "> 
              <div>
                <AiOutlineUser className="text-white text-[50px]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline"> 
                  <h2 className="text-3xl text-primary  font-semibold">
                   +300
                  </h2>
                  </div>
                  <div className="flex items-baseline">
                  <span className="text-primary text-white text-xs ">
                  Registered Products
                  </span>
                  </div>
              
              </div>
            </div>
          
          </div>
          <div className="rounded-md bg-primary2 shadow-lg border border-secondary items-center py-8  flex flex-col">
            <div className="flex  justify-between items-center "> 
              <div className="flex">
                <BsCartDash className="text-white text-[50px]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline"> 
                  <h2 className="text-3xl text-primary font-semibold">
                   +300
                  </h2>
                  </div>
                  <div className="flex items-baseline">
                  <span className="text-primary text-white text-xs ">
                  Registered Products
                  </span>
                  </div>
              
              </div>
            </div>
          
          </div>
          <div className="rounded-md bg-primary2 shadow-lg border border-secondary items-center py-8  flex flex-col">
            <div className="flex   items-center "> 
              <div>
                <BsCartDash className="text-white text-[50px]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline"> 
                  <h2 className="text-3xl text-primary font-semibold">
                   +300
                  </h2>
                  </div>
                  <div className="flex items-baseline">
                  <span className="text-primary text-white text-xs ">
                  Registered Products
                  </span>
                  </div>
              
              </div>
            </div>
          
          </div>
     
          {/* <div className="rounded-md bg-primary2 border border-secondary shadow-md p-4 flex flex-col">
            <div className="flex items-center justify-between "> 
              <div>
                <BsCartDash className="text-green-400 text-[30px]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline"> 
                  <h2 className="text-md text-white font-semibold">
                   +300
                  </h2>
                  </div>
                  <div className="flex items-baseline">
                  <span className="text-primary text-white text-xs ">
                  Active Products
                  </span>
                  </div>
              
              </div>
            </div>
          
          </div> */}
          {/* <div className="rounded-md bg-primary2 border-secondary border shadow-md p-4 flex flex-col">
            <div className="flex items-center  justify-between "> 
              <div>
                <BsCartDash className="text-green-400 text-[30px]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline"> 
                  <h2 className="text-md text-white font-semibold">
                   +300
                  </h2>
                  </div>
                  <div className="flex items-baseline">
                  <span className="text-primary text-white text-xs ">
                  Active Products
                  </span>
                  </div>
              
              </div>
            </div>
           
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CartCard;
