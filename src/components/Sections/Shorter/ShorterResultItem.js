import React, { useRef } from 'react';
import styles from './Shorter.module.css';

const ShorterResultItem = ({ data }) => {

    const newLinkRef = useRef();
    const copyButtonRef = useRef();

    let timer;

    const changeButtonStyle = () => {
        copyButtonRef.current.style.backgroundColor = 'hsl(180, 66%, 49%)';
        copyButtonRef.current.value = '';
        copyButtonRef.current.value = 'Copy';
    }

    const clickHandler = () => {
        clearTimeout(timer);
        let textToCopy = newLinkRef.current.innerHTML;

        const copyContent = async (textToCopy) => {
            let success = false;

            try {
                await navigator.clipboard.writeText(textToCopy);
                console.log('Content copied to clipboard');
                copyButtonRef.current.style.backgroundColor = 'hsl(257, 27%, 26%)';
                copyButtonRef.current.value = '';
                copyButtonRef.current.value = 'Copied!';
                success = true;
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
            if (success) {
                timer = setTimeout(changeButtonStyle, 1000);
            }
        }
        copyContent(textToCopy)
    }
    return (

        <div className={styles.resultsItemContainer}>
            <div className={styles.resultsItemWhiteBlock}>
                <div className={styles.oldLink}>{data.original}</div>

                <div className={styles.newDataContainer}>
                    <div className={styles.newLink} ref={newLinkRef}>{data.short}</div>
                    <div className={styles.buttonCopyContainer}>
                        <input
                            type={'button'}
                            value={'Copy'}
                            onClick={clickHandler}
                            ref={copyButtonRef}
                        />
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ShorterResultItem;