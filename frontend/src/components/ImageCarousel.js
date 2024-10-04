// src/components/ImageCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images directly as variables
import Veg from '../assets/veg.jpg';
import Chinese from '../assets/chinese.jpg';
import Non from '../assets/peakpx.jpg';

const ImageCarousel = () => {
  // Store the image paths in an array
  const images = [
    Veg, 
    Chinese,
    Non,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ width: '100%',  }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`slide-${index}`}
              style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
