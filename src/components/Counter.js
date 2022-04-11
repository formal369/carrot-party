import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

import styles from '../assets/css/counter.module.css';

const Counter = () => {
    const [number, setNumber] = useState(1);


    return (
        <div>
            <Button 
                onClick={(e) => {
                    e.preventDefault();
                    setNumber(number > 1 ? (number - 1) : (number - 0))}}
                className={styles.btns}
                    >-</Button>
            {/* &nbsp; */}
                <h5 className={styles.btns}>{number} 명</h5>

            <Button
                onClick={(e) => {
                    e.preventDefault();
                    setNumber(number + 1)}}
                className={styles.btns}
                    >+</Button>
        </div>
    );
};

export default Counter;