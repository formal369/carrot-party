import React from 'react';
import styles from '../assets/css/introduce.module.css';

const IntroduceSubBanner = () => {
    return (
        <div>
            <div className={styles.subBannerContainer}>
                <div className={styles.subBannerTextContainer}>
                    <h1 className={styles.subBannerText}>내가 하고 싶을 때</h1>
                    <h3 className={styles.subBannerText}>매일매일 아침부터 새벽까지</h3>
                </div>
                <div className={styles.subBannerTextContainer}>

                    <h1 className={styles.subBannerText}>내가 하고 싶은 곳에서</h1>
                    <h3 className={styles.subBannerText}>집 앞, 학교, 회사, 여행간 도시 어디서나</h3>
                </div>
                <div className={styles.subBannerTextContainer}>
                    <h1 className={styles.subBannerText}>내가 하고 싶은 것을</h1>
                    <h3 className={styles.subBannerText}>자기계발, 독서, 스포츠 , 게임</h3>
                </div>
            </div>
        </div>
    );
};

export default IntroduceSubBanner;