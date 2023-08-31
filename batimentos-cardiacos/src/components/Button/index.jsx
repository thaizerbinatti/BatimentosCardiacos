import styles from './Button.module.css';
import React from "react"
// import { Link } from 'react-router-dom'

function Button() {
    return (
        <div className={styles.buttons}>
            <button>FC 30</button>
            <button>FC 50</button>
            <button>FC 80</button>
            <button>FC 100</button>
        </div>
    )
}

export default Button;