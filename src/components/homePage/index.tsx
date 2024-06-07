'use client'
import React from 'react'
import Hero from '../hero';
import MainProjects from '../mainProjects';
import TextMask from '../textMask';
import AboutUs from '../aboutUs';
import Perpective from '../perpective/Perpective';
import Faqs from '../workedWith';
import FaqsData from '../workedWith/WorkedWithData';
import styles from "./style.module.scss"
import ZoomParallax from "../zoomParallax";
import ServicesList from '../ServicesList';

const HomeComponents = () => {

    return (
        <div className={styles.homePage}>
            <Hero />
            <MainProjects />
            <AboutUs />
            <TextMask />

            <Perpective />
            <ZoomParallax />
            <Faqs Data={FaqsData} />
        </div>
    )
}

export default HomeComponents