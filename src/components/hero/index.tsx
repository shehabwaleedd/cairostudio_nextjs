import React from 'react'
import styles from "./style.module.scss"
import getChars from '../../animations/animatedHeaders/getChars'
import Link from 'next/link'

const Home = () => {

    return (
        <section className={styles.home} >
            <div className={styles.home__container}>
                <div className={styles.home__container__content}>
                    <div className={styles.home__title_group}>
                        <div className={styles.home__title}>
                            {getChars("A DIGITAL DESIGN")}
                        </div>
                        <div className={styles.home__title}>
                            {getChars("STUDIO DRIVEN")}
                        </div>
                        <div className={styles.home__title}>
                            {getChars("BY RESEARCH")}
                        </div>
                        <div className={styles.home__title}>
                            {getChars("& STRATEGY")}
                        </div>
                    </div>
                </div>
                <div className={styles.lower}>
                    <div className={styles.home__subheader}>
                        <span>
                            We are specialized in web development, <br /> branding, UI/UX design, graphic design,<br /> Illustration & e-commerces.
                        </span>
                    </div>
                    <div className={styles.lower__callToActionsBtns}>
                        <Link className={styles.schedule} href="/about"> Schedule A brief </Link>
                        <Link className={styles.contact} href="/contact"> Contact Us </Link>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home