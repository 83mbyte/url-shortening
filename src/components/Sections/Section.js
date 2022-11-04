import React from 'react';
import styles from './Section.module.css';

const Section = ({ sectionId, bg, children }) => {

    return (
        <div id={sectionId} className={`${styles.containerOutside} ${styles[bg]}`} >
            <div className={styles.containerInside}>
                {children}
            </div>
        </div >
    );
};

export default Section;