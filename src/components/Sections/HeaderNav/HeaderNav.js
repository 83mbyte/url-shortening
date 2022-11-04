import React, { Fragment } from 'react';
import Logo from '../../Logo/Logo';
import styles from './HeaderNav.module.css';

const HeaderNav = () => {
    const navyLinksArray = ['Features', 'Pricing', 'Resources'];
    const navyButtonsArray = [{ title: 'Register' }, { title: 'SignUp', class: ['aButtonRegister', 'aButtonRegisterDropMenu'] }]

    return (
        <Fragment>
            <div className={styles.container}>

                <Logo title={'Shortly'} />

                <div className={styles.navigation}>
                    <div className={styles.navyLinksContainer}>
                        {
                            navyLinksArray.map((item, index) => {
                                return <a href='/' key={index}>{item}</a>
                            })
                        }
                    </div>

                    <div className={styles.signContainer}>
                        {
                            navyButtonsArray.map((item, index) => {
                                if (!item.class) {
                                    return <a href='/' key={index} >{item.title}</a>
                                } else {
                                    return <a href='/' key={index} className={item.class[0]}>{item.title}</a>
                                }
                            })
                        }
                    </div>
                </div>

                <div className={styles.burgerMenu}>
                    <div className={styles.burgerMenuIco}></div>
                    <div className={styles.menuExpandedContainer}>
                        <div className={styles.menuExpandedContent}>
                            {
                                navyLinksArray.map((item, index) => {
                                    return <a href='/' key={index}>{item}</a>
                                })
                            }
                            <div className={styles.menuHr}></div>
                            {
                                navyButtonsArray.map((item, index) => {
                                    if (!item.class) {
                                        return <a href='/' key={index} >{item.title}</a>
                                    } else {
                                        return <a href='/' key={index} className={styles[item.class[1]]}>{item.title}</a>
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );
};

export default HeaderNav;

