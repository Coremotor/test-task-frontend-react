import React from 'react';
import styles from './Footer.module.css'

export default function Footer () {
    return (
        <footer className={styles.footer}>
            <small className={styles.copyright}>&copy;&nbsp;2005—2020 НКО «МОНЕТА» (ООО)</small>
            <button className={styles.dayMode} aria-label="Смена ночного и дневного режима"/>
            <button className={styles.languageChange}>English</button>
        </footer>
    )
}