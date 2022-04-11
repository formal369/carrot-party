import React from 'react';

// 이미지 import
import Main from '../assets/img/main_logo.png';
import Calendar from '../assets/img/calendar-outline.svg';
import Profile from '../assets/img/person-circle-outline.svg';

import '../assets/css/bootstrap.min.css';
import '../assets/css/reset.css';
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';


const Header = (props) => {

    return (
        <header>
            <Navbar bg="primary" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                        src={ Main }
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="메인 로고"/>
                        {props.title}
                    </Navbar.Brand>
                    <Navbar aria-controls="basic-navbar-nav" />
                        <Nav className="ml-auto">
                            <Nav.Link href="#">
                                <img
                                src={ Calendar }
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="참가내역"
                                />
                            </Nav.Link>
                            <Nav.Link href="#">
                            <img
                                src={ Profile }
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="프로필"
                                />
                            </Nav.Link>
                            <NavDropdown title="메뉴" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">로그인</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">회원가입</NavDropdown.Item>
                                <NavDropdown.Item href="/makeparty">모임개설</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">자유게시판</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;