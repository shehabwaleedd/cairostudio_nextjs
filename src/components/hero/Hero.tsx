import React from 'react'
import "./Hero.scss"
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <motion.section className="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className='home__container'>
                <div className="home__content">
                    <motion.h1>
                        A DIGITAL DESIGN STUDIO DRIVEN BY RESEARCH & STRATEGY
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, }}
                        exit={{ opacity: 0, }}
                    >
                        We are a digital design studio based in Cairo, Egypt.<br /> We are specialized in brand identity, mobile app & <br /> website UI – UX design, graphic design, <br /> marketing & illustration.
                    </motion.p>
                </div>
            </div>
        </motion.section>
    )
}

export default Hero