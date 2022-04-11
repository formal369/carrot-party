import React from 'react';
import BannerImage from '../assets/img/deskparty.jfif';


import styles from '../assets/css/introduce.module.css';

const IntroduceBanner = () => {
    return (
        <div>
            <div className={styles.bannerContainer}>
                <img 
                    src={BannerImage}
                    alt="소개배너"
                    className={styles.bannerImage}
                />
                <div className={styles.bannerTextContainer}>
                    <h1 className={styles.bannerText}>공강시간, 연차, 반차내고 당근파티</h1>
                    <h1 className={styles.bannerText}>프리랜서도 야간근무자도 교대근무자도 당근파티</h1>
                </div>
            </div>
        </div>
    );
};

export default IntroduceBanner;