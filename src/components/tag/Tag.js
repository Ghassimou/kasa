import React from 'react';

const Tag = ({nom}) => {
    return (
            <button className='txt-tag'>
            {nom}
            </button> 
    );
};

export default Tag;