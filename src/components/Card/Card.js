import React, { Fragment } from 'react';

import styles from './Card.module.css';

const Card = ({ data, cardsExtra }) => {

    return (
        <Fragment>
            <div className={`${styles.container} ${styles[cardsExtra]}`}>
                <div className={`${styles.circleContainer} ${styles[cardsExtra]}`}></div>
                <div className={styles.cardContainer}>
                    <div  >
                        <h3>{data.title}</h3>
                        <p>{data.text}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Card;