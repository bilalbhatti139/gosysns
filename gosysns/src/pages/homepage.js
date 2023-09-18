import React from "react";
import Navbar from "../Components/home/navBar";
import Banner from "../Components/banner";
import Card from "../Components/home/card";
const HomePage = () => {
  return (
    <div className="bg-[#071952]">
      <Navbar />
      <Banner />
      <Card />
    </div>
  );
};

export default HomePage;
