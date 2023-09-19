import React from "react";
import banner from "../../assets/4.jpg";
import logo from "../../assets/3.PNG";
import { AiFillStar } from "react-icons/ai";
const StarBanner = () => {
  const backgroundImageUrl = banner;

  return (
    <div className="grid md:grid-cols-2  sm:grid-cols-1 grid-cols-1 justify-center items-center h-full">
      <div
        className={`bg-cover bg-center h-40 flex justify-center`}
        style={{
          backgroundImage: `url(${backgroundImageUrl})
          `,
          clipPath: "polygon(0% 0, 100% 0%, 66% 100%, 0% 100%)",
          

        }}
      ><div className="text-white justify-center items-center text-2xl flex">
      <div className="flex flex-col items-start ">
        <span className="text-3xl">Das denken unsere</span>
        <span className=" text-3xl">Kunden über uns!</span>
        <p className="text-sm">hDFJFQLFQKFJQFJQFQLFJQFLQF</p>
      </div>
    </div>
    </div>
    <div className="flex flex-col items-center">
  <div className="flex text-white text-2xl">
    
    <div className="flex items-center">
      <AiFillStar className="text-primary"/>
      <h1>Trustpilot</h1>
    </div>
  </div>
  <div className="flex flex-col">
    <div className="flex text-xl">
    <AiFillStar className="text-primary" />
    <AiFillStar className="text-primary" />
    <AiFillStar className="text-primary" />
    <AiFillStar className="text-primary" />
    <AiFillStar className="text-primary" />
    </div>
    <div className="flex text-center justify-center flex-start text-white">
       <span className="">3.8 out of 5</span> 
    </div>

   
  </div>
  

</div>

    </div>
  );
};

export default StarBanner;
