import React from 'react'
import "./Hero.scss"
import { motion } from "framer-motion"
import getChars from "../../utils/getChars"


const Hero = () => {
    return (
        <motion.section className="home">
            <div className='home__container'>
                <div className="home__content">
                    <div className="home__title_group">
                        <div className="home__title">
                            {getChars("A DIGITAL DESIGN STUDIO")}
                        </div>
                        <div className="home__title">
                            {getChars("DRIVEN BY RESEARCH")}
                        </div>
                        <div className="home__title">
                            {getChars("& STRATEGY")}
                        </div>
                    </div>
                    <motion.p>
                        We are a digital design studio based in Cairo, Egypt.<br /> We are specialized in brand identity, mobile app & <br /> website UI – UX design, graphic design, <br /> marketing & illustration.
                    </motion.p>
                </div>
            </div>
        </motion.section>
    )
}

export default Hero