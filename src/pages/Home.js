import React from "react";
import "./home.css";
import { configComponents } from "../data/config";
import CarouselComponent from "../components/carousel/Carousel";
import BannerComponent from "../components/banner/Banner";

export default function Home() {
  const visibleComponents = configComponents.filter(function (el) {
    return el.isVisible === true;
  });
  return (
    <React.Fragment>
      <div className="header">
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Products</h4>
      </div>
      <div className="content">
        {visibleComponents.map((i) => (
          <div key={i.component}>
            {i.component == "carousel" && <CarouselComponent data={i.data} />}
            {i.component == "banner" && <BannerComponent data={i.data} />}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
