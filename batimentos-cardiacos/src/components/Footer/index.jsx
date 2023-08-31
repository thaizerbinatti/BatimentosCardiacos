import styles from './Footer.module.css';
import React from "react"
// import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <small className={styles.small}>Batimentos Cardiacos</small>
            </div>
        </footer>
    )
}

export default Footer;