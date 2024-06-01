'use client'
import React, { useEffect } from 'react'
import './About.scss'
import AboutTop from './aboutComponents/AboutTop'
import AboutWhatItFeels from './aboutComponents/AboutWhatItFeels'
import AboutOFS from './aboutComponents/AboutOFS'
import AboutFC from './aboutComponents/AboutFC'
import { motion } from "framer-motion";
import AboutBelievers from './aboutComponents/AboutBelievers'
import AboutServices from './aboutComponents/aboutServices/AboutServices'
import Head from 'next/head'
import Stairs from "../../animations/transition/Stairs"

const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Head>
                <title>About | Cairo Studio</title>
                <meta name="description" content="Cairo Studio is a digital design studio based in Cairo, Egypt. We are specialized in web development, brand identity, website UI – UX design, graphic design, marketing & illustration." />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://cairo-studio.com" />
                <meta property="twitter:title" content="About" />
                <meta property="twitter:description" content="Cairo Studio About Page" />
                <meta property="twitter:image" content="https://cairo-studio.com/aboutlanding.webp" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://cairo-studio.com" />
                <meta property="og:title" content="About" />
                <meta property="og:description" content="Cairo Studio About Page" />
                <meta property="og:image" content="https://cairo-studio.com/aboutlanding.webp" />
            </Head>
            <Stairs>
                <motion.main className='about'>
                    <header className="about__title">
                        <h1>
                            REIMAGINING HOW <br />
                            CUSTOMERS CONNECT <br />
                            WITH YOUR BRAND
                        </h1>
                    </header>
                    <AboutTop />
                    <AboutServices />
                    <section className="about__us">
                        <AboutWhatItFeels />
                        <AboutOFS />
                        <AboutFC />
                        <AboutBelievers />
                    </section>
                </motion.main>
            </Stairs>
        </>
    )
}

export default About