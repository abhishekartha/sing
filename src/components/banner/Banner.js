import React from "react";

export default function BannerComponent(props) {
  const bannerData = props;
  return (
    <div className="banner-component">
      <h1>hi from banner</h1>
      <img
        src={bannerData.IMAGE.src}
        alt="banner image"
        className="banner-image"
      />
      <h1 className="banner-title">{bannerData.TITLE}</h1>
    </div>
  );
}
