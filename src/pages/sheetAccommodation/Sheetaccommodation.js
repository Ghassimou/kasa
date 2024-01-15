import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Cards from '../../components/cards/Card';

const Sheetaccommodation = () => {
    return (
        <div className='sheet'>
            <Header />
            <main>
              <Cards />
            </main>
            <Footer />
        </div>
    );
};

export default Sheetaccommodation;