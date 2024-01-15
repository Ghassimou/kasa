import React from "react";
import ImgBanner from "../../assets/images/img-banner/IMG-2.png"

const Banner = () => {
  return (
    <div className="content-banner">
      <img src={ImgBanner} alt="Panorama montagne" className="img-banner" />
      <h1 className="txt">Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default Banner;

