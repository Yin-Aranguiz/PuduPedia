import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Parkspage.css';
import ScrollIndicator from './ScrollIndicator';
import { parksInfo } from './Parksinfo';

const Card = ({ title, region, description, backgroundImage }) => (
  <div className="card" style={{ backgroundImage: `url(${backgroundImage})` }}>
    
          <h2>{title}</h2>
   <div className="blurredBackground">
     <div className="card-content">

      <h3>{region}</h3>
      <p>{description}</p>
     </div>
    </div>
  </div>
);

const CardParkPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = parksInfo.length;

  return (
    <Swiper
      direction="vertical"
      speed={1000}
      loop={true}
      className="swiper-container"
      onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
    >
      {parksInfo.map((park, index) => (
        <SwiperSlide key={index}>
          <Card
            title={park.title}
            region={park.region}
            description={park.description}
            backgroundImage={park.backgroundImage}
          />
        </SwiperSlide>
      ))}
      <ScrollIndicator totalSlides={totalSlides} currentSlide={currentSlide} />
    </Swiper>
  );
};

export default CardParkPage;
