import React from 'react'
import "./Hero.scss"
import { motion } from "framer-motion"
import getChars from '../../components/animations/animatedHeaders/getChars'

const Home = () => {
    return (
        <motion.section className="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className='home__container'>
                <div className="home__content">
                    {window.innerWidth > 468 ? (
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
                    ) : (
                        <div className="home__title_group">
                            <div className="home__title">
                                {getChars("A DIGITAL DESIGN")}
                            </div>
                            <div className="home__title">
                                {getChars("STUDIO DRIVEN")}
                            </div>
                            <div className="home__title">
                                {getChars("BY RESEARCH")}
                            </div>
                            <div className="home__title">
                                {getChars("& STRATEGY")}
                            </div>
                        </div>
                    )}
                    <div className="home_subheader">
                        <span>
                            We are specialized in web development, <br /> branding, UI/UX design, graphic design,<br /> Illustration & e-commerces.
                        </span>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Home