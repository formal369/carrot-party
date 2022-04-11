import React from 'react';
import Header from '../components/Header';
import IntroduceBanner from '../components/IntroduceBanner';


const IntroducePage = () => {
    return (
        <div>
            <Header title="소개페이지" />
            <IntroduceBanner />
        </div>
    );
};

export default IntroducePage;