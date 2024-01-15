import React from 'react';
import { NavLink } from 'react-router-dom';

const Navlinks = () => {
    return (
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
    );
};

export default Navlinks;