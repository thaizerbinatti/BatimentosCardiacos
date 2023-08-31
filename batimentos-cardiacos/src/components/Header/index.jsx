import styles from './Header.module.css'
import React from "react"
// import { Link } from 'react-router-dom'

function Header () {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a className={styles.item}>Home</a>
                <a className={styles.item}>Contatos</a>
                <a className={styles.item}>Sobre</a>
            </nav>
        </header>
    )
}

export default Header;