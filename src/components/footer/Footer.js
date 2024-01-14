import React from 'react';
import VectorK from '../../assets/img-logo/img-footer/Vector.png';
import Vector from '../../assets/img-logo/img-footer/Group.png';
import VectorS from '../../assets/img-logo/img-footer/Vector-2.png';
import VectorA from '../../assets/img-logo/img-footer/Vector-3.png';

const Footer = () => {
    return (
        <div className='footer-logo'>
            <div className='logo'>
            <img src={VectorK} alt="Le logo de kasa " />
            <img src={Vector} alt="Le logo de kasa " />
            <img src={VectorS} alt="Le logo de kasa " />
            <img src={VectorA} alt="Le logo de kasa " />
            </div>
            
            <p className='txt-copyright'>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;