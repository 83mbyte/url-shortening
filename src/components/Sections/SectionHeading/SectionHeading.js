import React from 'react';
import styles from './SectionHeading.module.css';

const SectionHeading = ({ data, color }) => {
    return (
        <div className={styles.container}>
            {
                data && data.title !== '' ? <h2 className={color && `${styles[color]}`}>{data.title}</h2> : 'put Section Title here'
            }
            {data && data.subtitle !== '' && <p className={styles.subtitle}>{data.subtitle}</p>}
        </div>
    );
};

export default SectionHeading;