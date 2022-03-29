import React from 'react';
import OfferCarousel from './OfferCarousel';
import OfferRestuarants from './OfferRestuarants';
import Navbar from './Navbar';

const HomePage = () => { 
    return (
        <>
            <Navbar />
            <OfferCarousel />
            <OfferRestuarants />
        </>
    );
};

export default HomePage;