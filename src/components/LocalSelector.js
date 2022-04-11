import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from '../assets/css/main.module.css';

const LocalSelector = () => {
    return (
        <div className="mb-2">
            <Button className={styles.local} variant="secondary" size="sm">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;동네&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
            <Button className={styles.local} variant="primary" size="sm">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서울&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
            <Button className={styles.local} variant="primary" size="sm">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;경기&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
            <Button className={styles.local} variant="primary" size="sm">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;인천&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
            <Button className={styles.local} variant="primary" size="sm">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;대전&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
            <Button className={styles.local} variant="primary" size="sm">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;대구&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
            <Button className={styles.local} variant="primary" size="sm">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;광주&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
            <Button className={styles.local} variant="primary" size="sm">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;부산&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
            <Button className={styles.local} variant="primary" size="sm">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;제주&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
        </div>
    );
};

export default LocalSelector;