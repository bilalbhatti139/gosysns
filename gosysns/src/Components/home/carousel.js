import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "./carouselCard";

const Carousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
  };

  const handleArrowKeys = (e) => {
    if (e.key === "ArrowLeft") {
      sliderRef.current.slickPrev();
    } else if (e.key === "ArrowRight") {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div
      className="w-custom-container mx-0 sm:mx-0 md:mx-auto"
      onKeyDown={handleArrowKeys}
      tabIndex={0} // Make the container focusable to capture key events
    >
      <Slider ref={sliderRef} {...settings}>
        <div className="p-12">
          <CarouselCard />
        </div>
        <div className="p-12">
          <CarouselCard />
        </div>
        <div className="p-12">
          <CarouselCard />
        </div>
        <div className="p-12">
          <CarouselCard />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
