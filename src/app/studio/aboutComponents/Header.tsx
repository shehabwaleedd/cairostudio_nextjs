'use client'
import React from 'react'
import styles from "../page.module.scss"
import getChars from '@/animations/animatedHeaders/getChars'

const Header = () => {
    return (
        <header className={styles.about__title}>
            <div className={styles.headers}>
                {getChars("Specialized In ")}
            </div>
            <div className={styles.headers}>
                {getChars("Translating brands")}
            </div>
            <div className={styles.headers}>
                {getChars("into unique immersive")}
            </div>
            <div className={styles.headers}>
                {getChars("digital experiences.")}
            </div>
        </header>)
}

export default Header