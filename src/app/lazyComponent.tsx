import React, { Suspense } from 'react'
import dynamic from 'next/dynamic';
import Hero from '../components/hero/Hero';
import MainProjects from '../components/mainProjects/MainProjects';
import TextMask from '../components/textMask/TextMask';
import AboutUs from '../components/aboutUs/AboutUs';
import Projectss from '@/components/Projects3D/Projects';
import Perpective from '../components/perpective/Perpective';
import Faqs from '../components/workedWith/WorkedWith';
import FaqsData from '../components/workedWith/WorkedWithData';
import Stairs from '../components/transition/Stairs';

const LazyComponent = () => {
    return (
        <Suspense fallback={
            <div>
                <h1 style={{ color: '#fff', textAlign: 'center', marginTop: '50vh' }}>Loading...</h1>
            </div>}>
            <Stairs>
                <Hero />
                <MainProjects />
                <TextMask />
                <AboutUs />
                <Projectss />
                <Perpective />
                <div style={{ padding: "0 2rem" }}>
                    <Faqs Data={FaqsData} />
                </div>
            </Stairs>
        </Suspense>
    )
}

export default LazyComponent