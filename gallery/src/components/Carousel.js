import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ images }) => {
  return (
    <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={3000}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.url} alt={`fitsixes ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
