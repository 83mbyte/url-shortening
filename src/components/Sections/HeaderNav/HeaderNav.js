import React, { Fragment } from 'react';
import Logo from '../../Logo/Logo';
import styles from './HeaderNav.module.css';

const HeaderNav = () => {
    return (
        <Fragment>
            <div className={styles.container}>

                <Logo title={'Shortly'} />



                <div className={styles.navigation}>
                    <div className={styles.navyLinksContainer}>
                        <a href='/'>Features</a>
                        <a href='/'>Pricing</a>
                        <a href='/'>Resources</a>
                    </div>
                    <div className={styles.signContainer}>
                        <a href='/'>Register</a>
                        <a href='/' className='aButtonRegister'>SignUp</a>
                    </div>

                </div>

                <div className={styles.burgerMenu}>
                    <div className={styles.burgerMenuIco}></div>
                    <div className={styles.menuExpandedContainer}>
                        <div className={styles.menuExpandedContent}>
                            <a href='/'>Features</a>
                            <a href='/'>Pricing</a>
                            <a href='/'>Resources</a>
                            <div className={styles.menuHr}></div>
                            <a href='/'>Register</a>
                            <a href='/' className={styles.aButtonRegisterDropMenu}>SignUp</a>
                        </div>
                    </div>
                </div>

            </div>


        </Fragment>
    );
};

export default HeaderNav;

