'use client'
import React from 'react'
import Hero from '../hero';
import MainProjects from '../mainProjects';
import TextMask from '../textMask';
import AboutUs from '../aboutUs';
import Perpective from '../perpective/Perpective';
import Faqs from '../workedWith/WorkedWith';
import FaqsData from '../workedWith/WorkedWithData';
import Stairs from '../../animations/transition/Stairs';
import styles from "./style.module.scss"
import ZoomParallax from "../zoomParallax";
import dynamic from 'next/dynamic'
const Projectss = dynamic(() => import('@/components/Projects3D/Projects'), { ssr: false })


const HomeComponents = () => {
    return (
        <Stairs>
            <div className={styles.homePage}>   
                <Hero />
                <MainProjects />
                <TextMask />
                <AboutUs />
                <Perpective />
                <Projectss />
                <ZoomParallax />
                <div className='faqs__padding'>
                    <Faqs Data={FaqsData} />
                </div>
            </div>
        </Stairs>
    )
}

export default HomeComponents