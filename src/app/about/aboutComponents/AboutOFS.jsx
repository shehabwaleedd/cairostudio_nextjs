import React from 'react'
import { motion } from 'framer-motion'
import "./sass/AboutOFS.scss"
const AboutOFS = () => {
    return (
        <motion.section className="our__founding__story">
            <motion.h2 initial={{ x: -50, opacity: 0 }} whileInView={{ x: 10, opacity: 1 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }} viewport={{ once: true }}>OUR FOUNDING STORY</motion.h2>
        </motion.section>
    )
}

export default AboutOFS