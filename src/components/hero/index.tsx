'use client'
import React, { useEffect } from 'react'
import styles from "./style.module.scss"
import getChars from '../../animations/animatedHeaders/getChars'
import Link from 'next/link'
import data from "@/components/workedWith/WorkedWithData"
import { TransitionLink } from '../transitionLink'
import { getCalApi } from "@calcom/embed-react";

import Upper from '../upper'
const Home = () => {

    useEffect(() => {
        (async function () {
            const cal = await getCalApi({});
            cal("ui", { "styles": { "branding": { "brandColor": "#ff4b26" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])


    return (
        <section className={styles.home}>
            <h1 style={{ display: "none" }}>
                Cairo Studio: Egypt&apos;s Experts in Websites, UI/UX & Graphic Design
            </h1>
            <div className={styles.home__container}>
                <div className={styles.home__container__content}>
                    <div className={styles.home__title_group}>
                        <div className={styles.home__title}>
                            {getChars("Cairo Studio Is A")}
                        </div>
                        <div className={styles.home__title}>
                            {getChars("Digital Design Studio")}
                        </div>
                        <div className={styles.home__title}>
                            {getChars(" Driven By Research")}
                        </div>
                        <div className={styles.home__title}>
                            {getChars("& Strategy")}
                        </div>
                    </div>
                </div>
            </div>
            <Upper p1="Information" p2='01' />
            <div className={styles.lower}>
                <div className={styles.lower_left}>
                    <div className={styles.home__subheader}>
                        <span>
                            Constantly striving to create exceptional experience and tell your story in a meaningful way.
                        </span>
                    </div>
                    <div className={styles.lower__callToActionsBtns}>
                        <button style={{backgroundColor: "var(--accent-color)", color: "var(--title-color)"}} data-cal-namespace=""data-cal-link="cairostudio/30min" data-cal-config='{"layout":"month_view"}'>Brief a schedule</button>
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