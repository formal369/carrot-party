import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import styles from '../../assets/css/main.module.css';

const PartySelector = () => {
    return (
        <Container>
          <Row className={styles.partyBox}>
            <Col md={2} className={styles.party} >03:00</Col>
            <Col className={styles.party} md={8} >
                <h3>새벽 여성 런닝 모임(서울 1)</h3>
                <h6>여성 12명</h6>
            </Col>
            <Col md={2} className={styles.party}><Button variant="warning">&nbsp;&nbsp;&nbsp;&nbsp;마감&nbsp;&nbsp;&nbsp;&nbsp;</Button></Col>
          </Row>
          <Row className={styles.partyBox}>
            <Col md={2} className={styles.party} >05:00</Col>
            <Col md={8} className={styles.party}>
                <h3>새벽 실내 배드민턴(서울 1)</h3>
                <h6>남녀 14명</h6>
            </Col>
            <Col md={2} className={styles.party}><Button variant="info">신청가능</Button></Col>
          </Row>
          <Row className={styles.partyBox}>
            <Col md={2} className={styles.party} >08:00</Col>
            <Col md={8} className={styles.party} >
                <h3>평일 등산 모임(서울 1)</h3>
                <h6>남녀 10명</h6>
            </Col>
            <Col md={2} className={styles.party}><Button variant="warning">&nbsp;&nbsp;&nbsp;&nbsp;마감&nbsp;&nbsp;&nbsp;&nbsp;</Button></Col>
          </Row>
          <Row className={styles.partyBox}>
            <Col md={2} className={styles.party} >08:30</Col>
            <Col md={8} className={styles.party} >
                <h3>평일 오전 일본어회화(서울 1)</h3>
                <h6>남녀 20명</h6>
            </Col>
            <Col md={2} className={styles.party}><Button variant="info">신청가능</Button></Col>
          </Row>
          <Row className={styles.partyBox}>
            <Col md={2} className={styles.party} >11:00</Col>
            <Col className={styles.party} md={8} >
                <h3>오전 영어회화 모임(서울 1)</h3>
                <h6>남녀 20명</h6>
            </Col>
            <Col md={2} className={styles.party}><Button variant="warning">&nbsp;&nbsp;&nbsp;&nbsp;마감&nbsp;&nbsp;&nbsp;&nbsp;</Button></Col>
          </Row>
          <Row className={styles.partyBox}>
            <Col md={2} className={styles.party} >14:00</Col>
            <Col md={8} className={styles.party}>
                <h3>보드게임 같이해요!(서울 1)</h3>
                <h6>남녀 16명</h6>
            </Col>
            <Col md={2} className={styles.party}><Button variant="info">신청가능</Button></Col>
          </Row>
          <Row className={styles.partyBox}>
            <Col md={2} className={styles.party} >15:00</Col>
            <Col md={8} className={styles.party} >
                <h3>평일 등산 모임(서울 1)</h3>
                <h6>남녀 10명</h6>
            </Col>
            <Col md={2} className={styles.party}><Button variant="warning">&nbsp;&nbsp;&nbsp;&nbsp;마감&nbsp;&nbsp;&nbsp;&nbsp;</Button></Col>
          </Row>
          <Row className={styles.partyBox}>
            <Col md={2} className={styles.party} >23:00</Col>
            <Col md={8} className={styles.party} >
                <h3>심야 축구 모임(서울 1)</h3>
                <h6>남성 22명</h6>
            </Col>
            <Col md={2} className={styles.party}><Button variant="info">신청가능</Button></Col>
          </Row>
        </Container>
    );
};

export default PartySelector;