'use client'
import React from 'react'
import Hero from '../hero';
import MainProjects from '../mainProjects';
import TextMask from '../textMask';
import AboutUs from '../aboutUs';
import Perpective from '../perpective/Perpective';
import Faqs from '../workedWith';
import FaqsData from '../workedWith/WorkedWithData';
import Stairs from '../../animations/transition/Stairs';
import styles from "./style.module.scss"
import ZoomParallax from "../zoomParallax";
import ServicesList from '../ServicesList';
import dynamic from 'next/dynamic'



const HomeComponents = () => {
    return (
        <Stairs>
            <div className={styles.homePage}>
                <Hero />
                <MainProjects />
                <AboutUs />
                <TextMask />
                <ServicesList />
                <Faqs Data={FaqsData} />
                <Perpective />
                <ZoomParallax />
            </div>
        </Stairs>
    )
}

export default HomeComponents