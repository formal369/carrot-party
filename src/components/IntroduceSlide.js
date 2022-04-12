import React, { useState } from 'react';
import styles from '../assets/css/introduce.module.css';

import image1 from '../assets/img/soccer.jpg';
import image2 from '../assets/img/chess.jpg';
import image3 from '../assets/img/community.jpg';

const IntroduceSlide = () => {
  const [number, setNumber] = useState(2);
  console.log(number);

  return(
    <div>
      <div>
        {
          number === 1
          ? 
            <div className={styles.imageContainer}>
              <img className={styles.introduceImage} src={image1} />
              <div className={styles.introduceText}>
                <h2>영업직이라 출장이 잦습니다. 집은 경기도, 회사는 서울, 일은 부산에서 하는데 가는 곳마다 당근파티가 있어서 편하네요.</h2>
              </div>
            </div>
          : ( number === 2
            ? <div className={styles.imageContainer}>
            <img className={styles.introduceImage} src={image2} />
            <div className={styles.introduceText}>
              <h2>체스두는 걸 좋아하는데 가족 중 아무도 같이 안둬주고 신경도 안써요. 다행이 동네 은퇴하신 분들하고 친해져서 하루하루 행복합니다.</h2>
            </div>
          </div>
            : <div className={styles.imageContainer}>
            <img className={styles.introduceImage} src={image3} />
            <div className={styles.introduceText}>
              <h2>발표를 해야할 때마다 너무 긴장되서 고민이었습니다. 그래서 발표연습을 혼자하기가 버거웠는데 저같은 분들을 만나서 이제 발표가 두렵지 않습니다.</h2>
            </div>
          </div>
            )
        }
      </div>
      
      <div className={styles.introduceButtonContainer}>
        <div className={styles.introduceButtonImage1} onClick={() => setNumber(1)}  alt="First image"/>
        <h3 className={styles.introduceButtonText}>긍정맨</h3>
        <h5 className={styles.introduceButtonText}>영업사원</h5>
      </div>

      <div className={styles.introduceButtonContainer}>
        <div className={styles.introduceButtonImage2} onClick={() => setNumber(2)} alt="Second image"/>
        <h3 className={styles.introduceButtonText}>체스남</h3>
        <h5 className={styles.introduceButtonText}>은퇴자</h5>
      </div>

      <div className={styles.introduceButtonContainer}>
        <div className={styles.introduceButtonImage3} onClick={() => setNumber(3)}  alt="Third image"/>
        <h3 className={styles.introduceButtonText}>마징가</h3>
        <h5 className={styles.introduceButtonText}>회사원</h5>
      </div>
    </div>
  )
};

export default IntroduceSlide;