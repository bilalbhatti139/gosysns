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
import TopBar from "../Components/home/topBar";
import EndBar from "../Components/home/endBar";
import CardBanner from "../Components/home/cardBanner";
const HomePage = () => {
  return (
    <div className="bg-secondary">
      <TopBar/>
      <Navbar />
     <CardBanner/>
      <SupportCard />
      <GameBanner />
      <CartCard />
      <StarBanner />
      <Carousel />

<Button />
<Footer />
<EndBar/>
      
      

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
