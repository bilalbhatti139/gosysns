import React from "react";
import Navbar from "../Components/home/navBar";
import Banner from "../Components/banner";
import Card from "../Components/home/card";
import SupportCard from "../Components/home/supportCard";
import GameBanner from "../Components/home/gameBanner";
import CartCard from "../Components/home/cartCard";
import StarBanner from "../Components/home/startBanner";
import Footer from "../Components/home/footer";
import Carousel from "../Components/home/carousel";
import Button from "../Components/home/button";
const HomePage = () => {
  return (
    <div className="bg-primary2">
      <Navbar />
      {/* <div class="relative">
        <div class=" ">
          <Banner />
        </div>
        <div class="absolute inset-0 top-96 ">
          <Card />
        </div>
      </div>
      <SupportCard />
      <GameBanner />
      <CartCard />
      <StarBanner />
      <Carousel />

      <Button />
      <Footer /> */}

      {/* <Banner />
      <Card />
      <SupportCard />
      <GameBanner />
      <CartCard />
      <StarBanner />
      <OwlCarousel /> */}

      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
