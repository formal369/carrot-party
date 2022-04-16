import React from 'react';

import Header from '../components/Header';
import MainBanner from '../components/MainBanner';
import SlideBanner from '../components/SlideBanner';
import DaySelector from '../components/DaySelector';
import LocalSelector from '../components/LocalSelector';
import PartySelector from '../components/PartySelector';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            <Header title="당근파티" />
            <hr />
            <MainBanner />
            <hr />
            <SlideBanner />
            <hr />
            <DaySelector />
            <hr />
            <LocalSelector />
            <hr />
            <PartySelector />
            <hr />
            <Footer />
        </div>
    );
};

export default HomePage;