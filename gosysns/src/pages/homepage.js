import React from "react";
import Navbar from "../Components/home/navBar";
import Banner from "../Components/banner";
import Card from "../Components/home/card";
import SupportCard from "../Components/home/supportCard";
import GameBanner from "../Components/home/gameBanner";
import CartCard from "../Components/home/cartCard";
import StarBanner from "../Components/home/startBanner";
import Footer from "../Components/home/footer";
import OwlCarousel from "../Components/home/carousel";
const HomePage = () => {
  return (
    <div className="bg-primary2">
      <Navbar />
      <Banner  />
      <Card />
      <SupportCard />
      <GameBanner />
      <CartCard/>
      <StarBanner/>
      <Footer/>
      <OwlCarousel/>
    </div>
  );
};

export default HomePage;
