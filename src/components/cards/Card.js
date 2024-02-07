import React from "react";
import Appartment from '../../components/appartment/Appartment';

const Card = ({image, title}) => {
  return (
    <article className="card">
      <Appartment />
      <img src={image} alt={title} className="card-img" />
      <div className="content-card">
        <div className="card-txt">
          <h2 className="card-title">{title}</h2>
        </div>
      </div>
    </article>
  );
};

export default Card;
