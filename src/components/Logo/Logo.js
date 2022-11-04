import React from 'react';
import styles from './Logo.module.css';

const Logo = ({ title, color }) => {
    return (
        <div className={!color ? `${styles.logoContainer}` : `${styles.logoContainer} ${styles[color]}`}>
            <span className='bold'>{title}</span>
        </div>
    );
};

export default Logo;