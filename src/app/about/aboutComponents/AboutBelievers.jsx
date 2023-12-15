import React from 'react'
import { motion } from 'framer-motion'
import "./sass/AboutBelievers.scss"

const AboutBelievers = () => {
    return (
        <motion.section className="aboutBelievers">
            <motion.h3 initial={{ x: -50, opacity: 0 }} whileInView={{ x: 10, opacity: 1 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }} viewport={{ once: true }}>Who Believed In & Stepped in</motion.h3>
            <motion.span initial={{ x: -50, opacity: 0 }} whileInView={{ x: 10, opacity: 1 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }} viewport={{ once: true }}>
                <motion.span initial={{ x: -50, opacity: 0 }} whileInView={{ x: 10, opacity: 1 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }} viewport={{ once: true }}>
                    Our journey unfolds with a profound appreciation for the web&apos;s endless possibilities. From a young age, we recognized the boundless potential of the digital landscape. However, as we explored local websites, we couldn&apos;t ignore the missed opportunities for excellence.
                    This realization fueled our belief that Egypt deserved the absolute best in its digital offerings. Whether it&apos;s websites, mobile applications, or a myriad of software solutions, our vision was clear: elevate the standards and deliver unmatched quality.
                    With unwavering determination, we took action to materialize this vision. We didn&apos;t wait for change; we became its architects. As dedicated frontend developers, we immersed ourselves in web development, driven to craft remarkable digital experiences.
                    But we didn&apos;t stop there. Recognizing that true excellence requires a team of experts, we gathered a collective of top talents from UI/UX designers to mobile developers, and specialists in various software fields. Together, we form a powerhouse of creativity and experience.
                    Our ambitions extend far beyond national borders. We are determined not only to make a mark locally but to capture global attention. With passion as our compass, we aspire to rival industry giants, showcasing our unique approach and forging an extraordinary path in the ever-evolving world of digital development.
                </motion.span>
            </motion.span>
        </motion.section>
    )
}

export default AboutBelievers