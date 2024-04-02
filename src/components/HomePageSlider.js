import React from "react";
import Slider from "react-slick";


export default function HomePageSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div  className="d-flex align-items-center justify-content-center">
        <img src="images/slider1.png" alt="slick-slider-img" width={700} height={310} />
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <img src="images/slider2.png" alt="slick-slider-img" width={700} height={310} />
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <img src="images/slider3.png" alt="slick-slider-img" width={700} height={310} />
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <img src="images/slider4.png" alt="slick-slider-img" width={700} height={310} />
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <img src="images/slider5.png" alt="slick-slider-img" width={700} height={310} />
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <img src="images/slider6.png" alt="slick-slider-img" width={700} height={310} />
      </div>
    </Slider>
  );
}