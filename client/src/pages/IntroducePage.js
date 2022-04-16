import React from 'react';
import Header from '../components/Header';
import IntroduceBanner from '../components/IntroduceBanner';
import IntroduceSubBanner from '../components/IntroduceSubBanner';
import IntroduceSlide from '../components/IntroduceSlide';


const IntroducePage = () => {
    return (
        <div>
            <Header title="소개페이지" />
            <IntroduceBanner />
            <IntroduceSubBanner />
            <IntroduceSlide />
        </div>
    );
};

export default IntroducePage;