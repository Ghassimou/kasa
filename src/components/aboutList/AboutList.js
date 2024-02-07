import React from "react";
import Accordion from "../accordion/Accordion";

const AboutList = ({ list }) => {
  return (
    <section className="aboutListContent">
      {list.map((e) => (
        <Accordion key={e.title} title={e.title} description={e.description} />
      ))}
    </section>
  );
};

export default AboutList;
