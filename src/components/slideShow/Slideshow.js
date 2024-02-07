import React, { useState } from "react";

import arrowRight from "../../assets/images/carrousel/arrow-right.png";
import arrowLeft from "../../assets/images/carrousel/arrow-left.png";

const Slideshow = ({ pictures }) => {
 // etat du composant
  const [slide, setSlide] = useState(0); // initialisation du compteur a zéro


  console.log(pictures, "toto");
  if(!pictures) return 
 

  const nbSlides = pictures?.length;

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
    <section className="carrousel">
      {pictures.map((picture, index) => {
        return <img src={picture} alt="Photo appartement" key={index} 
        className={slide === index ? "slide" : "slide slide-hiden"}/>;
      })}

      <img
        src={arrowRight}
        alt="Fléche de droite"
        className="arrowRight"
        onClick={nextImage}
        style={{ backgroundColor: "black" }}
      />
      <img
        src={arrowLeft}
        alt="Fléche de gauche"
        className="arrowLeft"
        onClick={prevImage}
        style={{ backgroundColor: "black" }}
      />
    </section>
  );
};

export default Slideshow;
