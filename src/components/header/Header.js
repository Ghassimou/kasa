import React from 'react';
import Logo from '../../assets/img-logo/LOGO.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return ( 
     <header className="header-logo">
        {/* Le logo de l'agence de kasa */}
      <img src={Logo} alt="Le logo kasa" />
      {/* La barre de navigation et les deux liens Accueil, A propos */}
        <nav>
            <ul className="nav-links">
                <NavLink to="/">
                <li>Accueil</li>
                </NavLink>
                <NavLink to="/about">
                <li>A Propos</li>
                </NavLink>  
            </ul>
        </nav>
     </header>
    );
};

export default Header;