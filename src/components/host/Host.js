import React from "react";

const Host = ({host}) => {
  
  return (
    <div className="host">
        <img src={host.picture} alt="Propriètaire" className="img-owner" />
      <h3 className="txt-owner">{host.name}</h3>
    </div>
  );
};

export default Host;
