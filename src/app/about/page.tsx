
import React from 'react'
import styles from "./page.module.scss"
import AboutTop from './aboutComponents/AboutTop'
import AboutServices from './aboutComponents/aboutServices/AboutServices'
import AboutBeliefs from './aboutComponents/aboutBeliefs/AboutBeliefs'

const About: React.FC = () => {

    return (
        <main className={styles.about}>
            <header className={styles.about__title}>
                <h1>
                    REIMAGINING HOW <br />
                    CUSTOMERS CONNECT <br />
                    WITH YOUR BRAND
                </h1>
            </header>
            <AboutTop />
            <AboutServices />
            <AboutBeliefs />
        </main>
    )
}

export default About