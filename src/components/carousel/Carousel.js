import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent(props) {
  const carouselData = props.data;
  return (
    <div className="carousel-component">
      <h1>{carouselData.TITLE}</h1>
      <Carousel>
        {carouselData.IMAGES.map((i) => (
          <div className="carousel-item active" key={i.src}>
            <img src={i.src} alt="some text" className="carousel-image" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
