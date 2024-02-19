import React, { useState } from "react";
import arrowBackup from "../../assets/images/arrow-backup/arrow_back.png";
// remplacer les classes
const Accordion = ({title, description}) => {
const [isOpen, setIsOpen] = useState (false)
  return (
    <article className="accordionContent">
      <h2 className="accordionTitle">
        {title}
        <img src={arrowBackup} onClick={()=>setIsOpen(!isOpen)} alt="" className="arrowBackup" />
      </h2>
      <p className={isOpen === true ? "accordionText is-visible" : " "}>{description}</p>
    </article>
  );
};

export default Accordion;
