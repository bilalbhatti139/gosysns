import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "./carouselCard";

const Carousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          autoplay: true,
        },
      },
    ],
  };

  const handleArrowKeys = (e) => {
    if (e.key === "ArrowLeft") {
      sliderRef.current.slickPrev();
    } else if (e.key === "ArrowRight") {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="mt-20">
      <div
        className="max-w-screen-lg mx-0 sm:mx-0 md:mx-auto"
        onKeyDown={handleArrowKeys}
        tabIndex={0} // Make the container focusable to capture key events
      >
        <Slider ref={sliderRef} {...settings}>
          <div className="p-4">
            <CarouselCard />
          </div>
          <div className="p-4">
            <CarouselCard />
          </div>
          <div className="p-4">
            <CarouselCard />
          </div>
          <div className="p-4">
            <CarouselCard />
          </div>
        </Slider>
        {/* <div className="flex justify-center gap-4 ">
          <button className="bg-primary text-md rounded-md px-5 text-white py-1">
            Weltere benweign
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Carousel;
