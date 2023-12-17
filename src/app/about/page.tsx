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
import Stairs from "../../components/transition/Stairs"

const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Head>

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