import React from 'react';
import { Carousel } from 'react-bootstrap';

import Swiper1 from '../assets/img/nintendo.jpg';
import Swiper2 from '../assets/img/computer_party.jpg';
import Swiper3 from '../assets/img/flat-design-futsal-field-with-players-illustration_52683-48592.jpg';
import Swiper4 from '../assets/img/deskparty.jfif';

const SlideBanner = () => {
    return (
        <Carousel>
            <Carousel.Item interval={900}>
                <img
                  className="d-block w-100"
                  src={Swiper1}
                  alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={900}>
              <img
                className="d-block w-100"
                src={Swiper2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={900}>
              <img
                className="d-block w-100"
                src={Swiper3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={900}>
              <img
                className="d-block w-100"
                src={Swiper4}
                alt="fourth slide"
              />
            </Carousel.Item>
        </Carousel>
    );
};

export default SlideBanner;