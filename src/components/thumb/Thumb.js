import React from "react";

//argument recuperer la props
const Thumb = ({ appartment }) => {
  return (
    <div
      className="thumb"
      style={{ backgroundImage: `url(${appartment.cover})` }}
    >
      <div className="overlay">
        <h3 className="txt">{appartment.title}</h3>
      </div>
    </div>
  );
};

export default Thumb;
