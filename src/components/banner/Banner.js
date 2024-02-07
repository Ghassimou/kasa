import React from "react";

const Banner = ({image, text}) => {
  return (
    <div className="content-banner">
      <div className="overlay"></div>
      <img src={image} alt="Panorama montagne" className="img-banner" />
      <h1 className="txt">{text}</h1>
    </div>
  );
};

export default Banner;

