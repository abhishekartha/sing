import React from "react";

export default function BannerComponent(props) {
  const bannerData = props.data;
  return (
    <div className="banner-component">
      <img
        src={bannerData.IMAGE.src}
        alt="banner image"
        className="banner-image"
      />
      <h1 className="banner-title">{bannerData.TITLE}</h1>
    </div>
  );
}
