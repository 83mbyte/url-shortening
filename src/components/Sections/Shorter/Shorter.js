import React, { Fragment, useEffect, useRef, useState } from 'react';
import styles from './Shorter.module.css';
import ShorterResultItem from './ShorterResultItem';

const Shorter = () => {
    const inputRef = useRef();
    const alertRef = useRef();
    const inputContainerRef = useRef();
    // let x = { original: 'http://test_only.com', short: "http://test_only.shrt" };
    const [itemsResult, setItemsResult] = useState([]);

    useEffect(() => {

        if (storageCheck('localStorage')) {
            if (localStorage.getItem('shorts')) {

                try {
                    let now = Date.now();
                    let oldValues = JSON.parse(localStorage.getItem('shorts'));
                    let filteredValues = oldValues.filter(item => item.expire > now);
                    localStorage.removeItem('shorts');

                    if (filteredValues.length > 0) {

                        setItemsResult(filteredValues);
                        localStorage.setItem('shorts', JSON.stringify(filteredValues));
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }
    }, []);

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
    const storageCheck = (type) => {
        let storage;
        try {
            storage = window[type];
            const x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                (storage && storage.length !== 0);
        }
    }

    const clickHandler = async (e) => {
        e.preventDefault();
        let scheduleToExpire = (Date.now() + (60 * 60 * 1000));  //time to expire storage item.. where 60*60*1000 = 1hour.

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
                );
                if (storageCheck('localStorage')) {
                    if (localStorage.getItem('shorts') && localStorage.getItem('shorts').length > 0) {

                        let oldValues = JSON.parse(localStorage.getItem('shorts'));

                        localStorage.setItem('shorts',
                            JSON.stringify(
                                [...oldValues,
                                { original: result.original, short: result.short, expire: scheduleToExpire }
                                ]
                            ))
                    } else {
                        localStorage.setItem('shorts', JSON.stringify([{ original: result.original, short: result.short, expire: scheduleToExpire }]))
                    }
                }
            }
        }

    }




    return (
        <Fragment>
            <div className={styles.container}>
                <div className={styles.formContainer}>
                    <div className={styles.formRow}>

                        <div className={styles.inputContainer} ref={inputContainerRef}>
                            <input type={'url'} ref={inputRef} aria-label={"UrlToModify"} />
                        </div>

                        <div className={styles.buttonContainer}>
                            <input
                                type={'button'}
                                value={'Shorten It!'}
                                onClick={clickHandler}
                                aria-label={"Shorten It!"}
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

