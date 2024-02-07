import React from 'react';
import Rating from '../../assets/images/rate/rate.png'

const Rate = (rate) => {
    return (
        <div className='content-rate'>
            <img src={Rating} alt="" className="rating" />   
        </div>
    );
};

export default Rate;