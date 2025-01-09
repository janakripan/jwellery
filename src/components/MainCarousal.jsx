import React from "react";
import Slider from "react-slick";
import { mainsliderdata } from "../constants/mainsliderdata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function MainCarousal() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
   
  };
  return (
    <div className="slider-container  z-0">
      <Slider {...settings}>
        {mainsliderdata.map((item, index) => (
            <div key={index} className=" w-full h-screen bg-slate-500">

            <img src={item.image} alt="slider" className="w-full h-full object-cover " />

            </div>
        ))}
        
      </Slider>
    </div>
  );
}

export default MainCarousal;
