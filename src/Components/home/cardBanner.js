import React from "react";
import Banner from "../banner";
import Card from "./card";

const CardBanner = () => {
  return (
    <div className="relative ">
      <div className="">
        <Banner/>
      </div>
      <div class="absolute   inset-0 top-[26rem] ">
        <Card/>
      </div>
    </div>
  );
};

export default CardBanner;
