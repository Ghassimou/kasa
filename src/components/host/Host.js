import React from "react";
import Owner from "../../assets/images/Host.jpg"

const Host = () => {
  return (
    <div className="host">
        <img src={Owner} alt="" className="owner" />
      <h3 className="txt">Alexandre Dumas</h3>
    </div>
  );
};

export default Host;
