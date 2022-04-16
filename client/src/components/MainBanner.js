import React from 'react';
import '../assets/css/bootstrap.min.css';
import TopBanner from '../assets/img/party.png';
import style from '../assets/css/main.module.css';

const MainBanner = () => {
    return (
        
        <div>
            <div className={style.topBannerText}>
                <h5 className={style.topBannerText1}>근무시간이 불규칙한 동네사람끼리 만나세요!</h5>
                <h6 className={style.topBannerText2}>평일 오전이든 새벽이든 시간되면 같이 취미를 즐기고 자기계발을 합시다!</h6>
            </div>
            <div className={style.topBannerImg}>
                <img 
                    src={TopBanner} 
                    alt="탑배너 이미지"
                    className="img-fluid float-start"
                    width="600"
                    height="600"
                />
            </div>
        </div>
        
    );
};

export default MainBanner;