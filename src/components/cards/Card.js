import React from "react";
import Logement from "../../assets/images/Background.png"
import Tag from "../tag/Tag";
import Host from "../host/Host";
import Rate from "../rate/Rate";

const Cards = () => {
  return (
      <article className="card">
        <img src={Logement} alt="" className="card-img" />
        <div className="content-card">
          <div className="card-txt">
          <h2 className="card-title">Cozy loft on the Canal Saint-Martin</h2>
        <p className="card-subtitle">Paris, Île-de-France</p>
          </div>
          <div className="content-host"><Host /></div>
          <div className="content-tag">
            <Tag />
          </div>
          <div className="card-rating">
          <Rate />
          </div>
          
        </div>
      </article>
  );
};

export default Cards;
