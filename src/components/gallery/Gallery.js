import React from 'react';
import Thumb from '../thumb/Thumb';
import {Link} from 'react-router-dom';

// recuperation appartement en props
const Gallery = ({appartments}) => {
    console.log(appartments)
    return (
        //on passe la props appartement au composant
        <section className='home-gallery'>
            {appartments.map(appartment => <Link key={appartment.id} to={`/appartment/${appartment.id}`}><Thumb appartment={appartment}/></Link>)}    
        </section>
    );
};

export default Gallery;