import React from 'react';
import VectorK from '../../assets/images/logo/footer-logo_K.png';
import VectorHome from '../../assets/images/logo/footer-logo_^.png';
import VectorS from '../../assets/images/logo/footer-logo_s.png';
import VectorA from '../../assets/images/logo/footer-logo_a.png';

const Footer = () => {
    return (
        <div className='footer-logo'>
            <div className='logo'>
            <img src={VectorK} alt="Le logo de kasa " />
            <img src={VectorHome} alt="Le logo de kasa " />
            <img src={VectorS} alt="Le logo de kasa " />
            <img src={VectorA} alt="Le logo de kasa " />
            </div>
            
            <p className='txt-copyright'>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;