'use client'
import React from 'react'
import styles from "./style.module.scss"
import getChars from '../../animations/animatedHeaders/getChars'
import Link from 'next/link'
import data from "@/components/workedWith/WorkedWithData"
import { TransitionLink } from '../transitionLink'
import Upper from '../upper'
const Home = () => {

    return (
        <section className={styles.home} >
            <div className={styles.home__container}>
                <div className={styles.home__container__content}>
                    <div className={styles.home__title_group}>
                        <div className={styles.home__title}>
                            {getChars("Cairo Studio Is")}
                        </div>
                        <div className={styles.home__title}>
                            {getChars("A DIGITAL DESIGN STUDIO")}
                        </div>
                        <div className={styles.home__title}>
                            {getChars(" DRIVEN BY RESEARCH")}
                        </div>
                        <div className={styles.home__title}>
                            {getChars("& STRATEGY")}
                        </div>
                    </div>
                </div>
            </div>
            <Upper  p1="Information" p2='01' />
            <div className={styles.lower}>
                <div className={styles.lower_left}>
                    <div className={styles.home__subheader}>
                        <span>
                            Constantly striving to create exceptional experience and tell your story in a meaningful way.
                        </span>
                    </div>
                    <div className={styles.lower__callToActionsBtns}>
                        <Link className={styles.schedule} href="https://calendly.com/hello-cairo-studio/30min" target="_blank" rel="noopener noreferrer"> Schedule A brief </Link>
                        <TransitionLink href="/contact" label="Contact Us" />
                    </div>
                </div>
                <div className={styles.lower_right}>
                    <ul>
                        <li>Web Development</li>
                        <li>Graphic Design</li>
                        <li>UI/UX Design</li>
                        <li>SEO</li>
                        <li>E-Commerce</li>
                        <li>Branding</li>
                    </ul>
                    <ul>
                        {data.slice(0, 6).map((item, i) => (
                            <li key={i}>{item.name}</li>
                        ))}
                        <li>
                            & More
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Home