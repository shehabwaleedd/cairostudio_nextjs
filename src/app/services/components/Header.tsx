'use client'
import React from 'react'
import getChars from '@/animations/animatedHeaders/getChars'
import styles from "@/app/studio/page.module.scss"

const Header = () => {
    return (
        <header className={styles.about__title}>
            <div className={styles.headers}>
                {getChars("Blending creativity,")}
            </div>
            <div className={styles.headers}>
                {getChars("design, and technology")}
            </div>
            <div className={styles.headers}>
                {getChars("to elevate ambitious")}
            </div>
            <div className={styles.headers}>
                {getChars("brands globally.")}
            </div>
        </header>
    )
}

export default Header