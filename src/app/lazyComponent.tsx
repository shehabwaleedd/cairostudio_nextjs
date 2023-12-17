import React from 'react'
import dynamic from 'next/dynamic';
const Hero = dynamic(() => import('../components/hero/Hero'), { ssr: true });
const MainProjects = dynamic(() => import('../components/mainProjects/MainProjects'), { ssr: true });
const TextMask = dynamic(() => import('../components/textMask/TextMask'), { ssr: false });
const AboutUs = dynamic(() => import('../components/aboutUs/AboutUs'), { ssr: false });
const Projects = dynamic(() => import('../components/Projects3D/Projects'), { ssr: false });
const Perpective = dynamic(() => import('../components/perpective/Perpective'), { ssr: false });
const Faqs = dynamic(() => import('../components/workedWith/WorkedWith'), { ssr: false });
import FaqsData from '../components/workedWith/WorkedWithData';
import Stairs from '../components/transition/Stairs';

const lazyComponent = () => {
    return (
        <Stairs>
            <Hero />
            <MainProjects />
            <TextMask />
            <AboutUs />
            <Projects />
            <Perpective />
            <div style={{ padding: "0 2rem" }}>
                <Faqs Data={FaqsData} />
            </div>
        </Stairs>
    )
}

export default lazyComponent