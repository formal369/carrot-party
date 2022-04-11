import React from 'react';
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import Button from 'react-bootstrap/Button';

import styles from '../assets/css/main.module.css';
import '../assets/css/reset.css';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
dayjs.locale('ko');

const DaySelector = () => {
    
      interface PaneProps {
        children: React.ReactNode;
        className?: string;
        style?: React.CSSProperties;
      }
      
      const Pane: React.FC<PaneProps> = ({ children, style, className }) => (
            <div className={styles.dayContainer}> 
                <div className={`glider-slide ${className || ''}`} style={style}>
                    {/* 토요일과 일요일은 다른 버튼색상 지정 */}
                    <Button className="days" variant={`${children.includes("토") ? "info" : children.includes("일") ? "danger" : "primary"}`} size="lg">{children}</Button>
                </div>
            </div>
      );

    const render = () => {
        const now = dayjs();
        const result = [];
        // 8일 동안의 날짜버튼 표시
        for(let i = 0; i < 8; i++) {
            result.push(<Pane>{now.add(i, "d").format("DD dd")}</Pane>);
        }
        return result;
    }

    return (
        <Glider
            draggable
            hasArrows
            slidesToShow={6}
            slidesToScroll={1}
        >
            {render()}
        </Glider>
    );
};

export default DaySelector;