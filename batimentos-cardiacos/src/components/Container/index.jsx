import styles from './Container.module.css';
import React from "react"
import Button from '../Button';
// import { Link } from 'react-router-dom'

function Container() {
    return (
        <main className={styles.container}>
            <div className={styles.titulo}>
                <h1>Batimentos Cardicos</h1>
                <p>E escolha o valor da Frequencia Cardiaca, e veja como aparece em um monitor de hospital:</p>
            </div>
            <Button />
            <div className={styles.img}>
                <img src="https://thumbs.gfycat.com/EnormousWindingAmberpenshell-size_restricted.gif"></img>
            </div>
        </main>
    )
}

export default Container