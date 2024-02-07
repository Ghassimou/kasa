import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Slideshow from '../../components/slideShow/Slideshow';
import appartments from '../../datas/data.json';
import { useParams } from 'react-router-dom';

const Appartment = () => {
    const location = useParams()
   const appartment = appartments.find(e => e.id === location.id)
   console.log(appartment)

    return (

        <div className='appartment'>
            <Header />
            <main>
                <Slideshow pictures={appartment.pictures}/> 
            </main>
            <Footer />
        </div>
    );
};

export default Appartment;