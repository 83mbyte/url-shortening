import React, { Fragment, useRef, useState } from 'react';
import styles from './Shorter.module.css';
import ShorterResultItem from './ShorterResultItem';

const Shorter = () => {
    const inputRef = useRef();
    const alertRef = useRef();
    const inputContainerRef = useRef();
    // let x = { original: 'http://test_only.com', short: "http://test_only.shrt" };
    const [itemsResult, setItemsResult] = useState([]);

    const fetchData = async (url) => {
        console.log('...fetching...')
        let BASEURL = 'https://api.shrtco.de/v2/shorten?url=';

        let res = await fetch(`${BASEURL}${url}`);

        if (res.status === 201) {
            let resp = await res.json();
            return {
                original: resp.result.original_link,
                short: resp.result.full_short_link
            };
        } else {
            return 'Error'
        }
    }

    const clickHandler = async (e) => {
        e.preventDefault();
        const urlRegex = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/;

        if (!inputRef.current.value || inputRef.current.value === '' || !urlRegex.test(inputRef.current.value)) {

            alertRef.current.style.opacity = 1;
            inputContainerRef.current.style.borderWidth = '2px';
            inputRef.current.focus();
        } else {
            alertRef.current.style.opacity = 0;
            inputContainerRef.current.style.borderWidth = '0px';
            let url = inputRef.current.value.trim();
            let result = await fetchData(url);

            if (result !== 'Error') {
                setItemsResult(
                    [
                        ...itemsResult,
                        { original: result.original, short: result.short }
                    ]
                )
            }
        }

    }
    return (
        <Fragment>
            <div className={styles.container}>
                <div className={styles.formContainer}>
                    <div className={styles.formRow}>

                        <div className={styles.inputContainer} ref={inputContainerRef}>
                            <input type={'url'} ref={inputRef} />
                        </div>

                        <div className={styles.buttonContainer}>
                            <input
                                type={'button'}
                                value={'Shorten It!'}
                                onClick={clickHandler}
                            />
                        </div>
                    </div>

                    <div className={styles.alertRow} ref={alertRef}><p>Please add a correct link..</p></div>
                </div>

            </div >

            <div className={styles.resultsContainer}>
                <div className={styles.resultsInner}>
                    {
                        itemsResult.map((item, index) => {
                            return <ShorterResultItem data={item} key={index} />
                        })
                    }
                </div>
            </div>
        </Fragment>
    );
};

export default Shorter;

