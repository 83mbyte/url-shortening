import React from 'react';
import styles from './Intro.module.css';


const Intro = () => {
    return (
        <div className={styles.container}>
            <div className={styles.introDataContainer}>
                <div>
                    <h1>More than just shorter links</h1>
                    <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                    <a href='/' className='aButton'>Get Started</a>
                </div>
            </div>
            <div className={styles.introImageContainer}></div>
        </div>
    );
};

export default Intro;