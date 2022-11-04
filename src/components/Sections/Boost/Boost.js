import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './Boost.module.css';

const Boost = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <SectionHeading data={{ title: 'Boost your links today' }} color="white" />
                <a href='/' className='aButton'>Get Started</a>
            </div>
        </div>
    );
};

export default Boost;