import React from 'react';
import Logo from '../../Logo/Logo';
import styles from './Footer.module.css';

const Footer = () => {
    const linksArray = [
        {
            main: ['Features'],
            other: ['Link Shortening', 'Branded Links', 'Analytics']
        },
        {
            main: ['Resources'],
            other: ['Blog', 'Developers', 'Support']
        },
        {
            main: ['Company'],
            other: ['About', 'Our Team', 'Careers', 'Contact']
        },
    ];
    const socialMedia = [
        <ion-icon name="logo-facebook"></ion-icon>,
        <ion-icon name="logo-twitter"></ion-icon>,
        <ion-icon name="logo-pinterest"></ion-icon>,
        <ion-icon name="logo-instagram"></ion-icon>
    ]
    return (
        <div className={styles.container}>

            <Logo title={"Shortly"} color={"white"} />

            <div className={styles.linksContainer}>
                {
                    linksArray.map((item, index) => {
                        return (

                            <div className={styles.links} key={index}>
                                <a href='/' className={styles.whiteLnk}><div className='bold' style={{ marginBottom: '15px' }} >{item.main}</div></a>

                                {
                                    item.other.map((elem, ind) => {
                                        return (
                                            <a href='/' key={ind}>{elem}</a>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
            <div className={styles.social}>

                {
                    socialMedia.map((item, index) => {
                        return (
                            <a href='/' key={index}>{item}</a>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Footer;