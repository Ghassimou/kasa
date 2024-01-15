import React from 'react';
import Thumb from '../thumb/Thumb';
import {Link} from 'react-router-dom';

const Gallery = () => {
    return (
        <section className='home-gallery'>
            <Link to="/thumb"><Thumb /></Link>
            <Link to="/thumb"><Thumb /></Link>
            <Link to="/thumb"><Thumb /></Link>
            <Link to="/thumb"><Thumb /></Link>
            <Link to="/thumb"><Thumb /></Link>
        </section>
    );
};

export default Gallery;