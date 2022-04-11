import React from 'react';
import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import styles from '../assets/css/main.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <Container className="bg-primary">
            <Row>
                <Col className={styles.footer} md={4}>
                    <ul>
                        <h3 className={styles.footerTitle}>서비스 지역</h3>
                        <li><Link to="#">서울</Link></li>
                        <li><Link to="#">경기</Link></li>
                        <li><Link to="#">인천</Link></li>
                        <li><Link to="#">대전</Link></li>
                        <li><Link to="#">대구</Link></li>
                        <li><Link to="#">광주</Link></li>
                        <li><Link to="#">부산</Link></li>
                    </ul>
                </Col>
                
                <Col className={styles.footer} md={4}>
                    <ul>
                        <h3 className={styles.footerTitle}>당근파티</h3>
                        <li><Link to="/introduce">당근파티 소개</Link></li>
                        <li><Link to="#">공지사항</Link></li>
                        <li><Link to="#">채용</Link></li>
                        <li><Link to="#">자주 묻는 질문</Link></li>
                    </ul>
                </Col>

                <Col className={styles.footer} md={4}>
                    <ul>
                        <h3 className={styles.footerTitle}>소셜 미디어</h3>
                        <li><Link to="#"><FontAwesomeIcon icon={faYoutube} /> 유튜브</Link></li>
                        <li><Link to="#"><FontAwesomeIcon icon={faInstagram} />인스타그램</Link></li>
                        <li><Link to="#"><FontAwesomeIcon icon={faFacebook} />페이스북</Link></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;