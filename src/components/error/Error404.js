import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <main>
        <div className="error404">
        <p className="msg-error-number">404</p>
        <p className="msg-error-txt">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <NavLink to="/">
          <p className="link-txt-home">Retourner sur la page d’accueil</p>
        </NavLink>
        </div>
      </main>
    </div>
  );
};

export default Error404;
