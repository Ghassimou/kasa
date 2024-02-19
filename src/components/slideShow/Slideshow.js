import React, { useState } from "react";

import arrowRight from "../../assets/images/carrousel/arrow-right.png";
import arrowLeft from "../../assets/images/carrousel/arrow-left.png";

const Slideshow = ({ appartment }) => {
  // etat du composant
  console.log("console log slideshow", appartment);
  const [slide, setSlide] = useState(0); // initialisation du compteur a zéro
  const nbSlides = appartment.pictures?.length; // Longeur du tableau

  if (!appartment.pictures) return;

  // comportement

  const nextImage = () => {
    console.log(nextImage, "suivent");
    setSlide(slide === nbSlides - 1 ? 0 : slide + 1);
  };
  const prevImage = () => {
    console.log(prevImage, "précedent");
    setSlide(slide === 0 ? nbSlides - 1 : slide - 1);
  };

  //affichage
  return (
    <article className="card">
      {appartment.pictures.map((picture, index) => {
        return (
          <img
            src={picture}
            alt="Photo appartement"
            key={index}
            className={slide === index ? "card-img" : "slide slide-hiden"}
          />
        );
      })}

      <img
        src={arrowRight}
        alt="Fléche de droite"
        className=" arrow arrow-forword"
        onClick={nextImage}
        style={{ backgroundColor: "black" }}
      />
      <img
        src={arrowLeft}
        alt="Fléche de gauche"
        className="card-arrow arrow-back"
        onClick={prevImage}
        style={{ backgroundColor: "black" }}
      />
      <div className="content-card">
        <div className="content-title-location">
          <h2 className="title">{appartment.title}</h2>
          <span className="location">{appartment.location}</span>
        </div>
        <div className="content-host">
          <span className="owner-name">{appartment.host.name}</span>
          <img
            src={appartment.host.picture}
            alt="Photo du propriètaire"
            className="owner-img"
          />
        </div>
        <div className="content-tag-description">
            <span className="txt-tag">{appartment.tags}</span>
          <div className="description">{appartment.description}</div>
        </div>
        <div className="content-rating-equipment">
        <span className="rate">{appartment.rating}</span>
          <div className="equipment">{appartment.equipments}</div>
        </div>
      </div>
    </article>
  );
};

export default Slideshow;
