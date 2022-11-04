import React, { Fragment } from 'react';
import Card from '../../Card/Card';
import SectionHeading from '../SectionHeading/SectionHeading';
import styles from './AdvStats.module.css';

const AdvStats = () => {

    const cardsExtra = ['first', 'middle', 'last'];
    const cards = [
        {
            title: 'Brand Recognition',
            text: `Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.`
        },
        {
            title: `Detailed Records`,
            text: `Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.`
        },
        {
            title: `Fully Customizable`,
            text: `Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.`
        }
    ];
    const sectionTitleData = {
        title: 'Advanced Statistics', subtitle: `Track how your links are performing across the web with our 
  advanced statistics dashboard.`}
    return (
        <div className={styles.container}>

            <SectionHeading data={sectionTitleData} />

            <div className={styles.cardsContainer}>

                {
                    cards.map((item, index) => {
                        if (index < cards.length - 1) {

                            return (
                                <Fragment key={index}>
                                    <Card data={item} cardsExtra={cardsExtra[index]} />
                                    <div className={styles.spacerBrick} ></div>
                                </Fragment>
                            )
                        } else {

                            return <Card data={item} key={index} cardsExtra={cardsExtra[index]} />
                        }
                    })
                }
            </div>
        </div>
    );
};

export default AdvStats;