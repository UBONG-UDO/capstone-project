"use client";
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyCarousel = () => {
  return (
    <div className=''>
    <Carousel 
      showArrows={false} 
      autoPlay={true} 
      infiniteLoop={true} 
      showThumbs={false} 
      showStatus={false}
      interval={3000}
    >
      
      <div>
        <img src="/images/controller.png" alt="Slide 2" />
        <p className="legend">FELICITY-48V-15KWH-lithium-battery-STANDING</p>
      </div>
      <div>
        <img src="/images/Battery.png"alt="Slide 3" />
        <p className="legend">Luminous 15kva 360V Sine Wave Inverter</p>
      </div>
      <div>
        <img src="/images/Inverter2.png"alt="Slide 3" />
        <p className="legend">Luminous 15kva 360V Sine Wave Inverter</p>
      </div>
    </Carousel>
    </div>
  );
};

export default MyCarousel;
