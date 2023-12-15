import React from 'react'
import { motion } from 'framer-motion'
import "./sass/AboutWhatItFeels.scss"

const AboutWhatItFeels = () => {
    return (
        <motion.section className="about__what_it_feels" transition={{ duration: 0.5 }} >
            <motion.h2 initial={{ opacity: 0, y: -110, transition: { duration: 0.4, type: "spring", damping: 12, staggerChildren: 2.5, stiffness: 100, ease: [0.42, 0, 0.58, 1] } }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, type: "spring", staggerChildren: 2.5, damping: 12, stiffness: 100, ease: [0.42, 0, 0.58, 1] } }} viewport={{ once: true }}>WHAT IT&apos;S LIKE TO WORK WITH US</motion.h2>
            <div className="what__it_feels_content">
                <div className="col_1">
                    <motion.h3 initial={{ opacity: 0, x: -110, skewX: 10, transition: { duration: 0.4, type: "spring", damping: 12, staggerChildren: 2.5, stiffness: 100, ease: [0.42, 0, 0.58, 1] } }} whileInView={{ opacity: 1, x: 0, skewX: 0, transition: { duration: 0.4, type: "spring", staggerChildren: 2.5, damping: 12, stiffness: 100, ease: [0.42, 0, 0.58, 1] } }} viewport={{ once: true }}>Customer Satisfaction</motion.h3>
                    <motion.span initial={{ opacity: 0, y: -110, skewX: 10, transition: { duration: 0.4, type: "spring", damping: 12, staggerChildren: 2.5, stiffness: 100, ease: [0.42, 0, 0.58, 1] } }} whileInView={{ opacity: 1, y: 0, skewX: 0, transition: { duration: 0.4, type: "spring", staggerChildren: 2.5, damping: 12, stiffness: 100, ease: [0.42, 0, 0.58, 1] } }} viewport={{ once: true }}>At Cairo Studio, we prioritize your satisfaction above all else in website and mobile application design. We are committed to delivering an exceptional customer experience, from personalized consultations to ensuring prompt delivery of UI/UX design projects. Our dedicated team consistently goes above and beyond to exceed your expectations. We value your feedback and continuously refine our services to better serve your needs in website design and mobile application development.</motion.span>
                </div>
                <div className="col_2">
                    <motion.h3 initial={{ opacity: 0, x: -110, skewX: 10, transition: { duration: 0.4, type: "spring", damping: 12, staggerChildren: 2.5, stiffness: 100, ease: [0.42, 0, 0.58, 1] } }} whileInView={{ opacity: 1, x: 0, skewX: 0, transition: { duration: 0.4, type: "spring", staggerChildren: 2.5, damping: 12, stiffness: 100, ease: [0.42, 0, 0.58, 1] } }} viewport={{ once: true }}>Uncompromising Standards</motion.h3>
                    <motion.span initial={{ opacity: 0, y: -110, skewX: 10, transition: { duration: 0.4, type: "spring", damping: 12, staggerChildren: 2.5, stiffness: 100, ease: [0.42, 0, 0.58, 1] } }} whileInView={{ opacity: 1, y: 0, skewX: 0, transition: { duration: 0.4, type: "spring", staggerChildren: 2.5, damping: 12, stiffness: 100, ease: [0.42, 0, 0.58, 1] } }} viewport={{ once: true }}>Our unwavering commitment to excellence extends to the craftsmanship of our digital solutions, whether it&apos;s UI/UX design or website development. We meticulously design each project with a keen focus on durability, user comfort, and seamless functionality. By offering nothing less than outstanding quality in website and mobile application design, we empower our clients with digital solutions they can rely on and enjoy for years to come.</motion.span>
                </div>
                <div className="col_3">
                    <motion.h3 initial={{ opacity: 0, x: -110, skewX: 10, transition: { duration: 0.4, type: "spring", damping: 12, staggerChildren: 2.5, stiffness: 100, ease: [0.42, 0, 0.58, 1] } }} whileInView={{ opacity: 1, x: 0, skewX: 0, transition: { duration: 0.4, type: "spring", staggerChildren: 2.5, damping: 12, stiffness: 100, ease: [0.42, 0, 0.58, 1] } }} viewport={{ once: true }}>Value in Every Garment</motion.h3>
                    <motion.span initial={{ opacity: 0, y: -110, skewX: 10, transition: { duration: 0.4, type: "spring", damping: 12, staggerChildren: 2.5, stiffness: 100, ease: [0.42, 0, 0.58, 1] } }} whileInView={{ opacity: 1, y: 0, skewX: 0, transition: { duration: 0.4, type: "spring", staggerChildren: 2.5, damping: 12, stiffness: 100, ease: [0.42, 0, 0.58, 1] } }} viewport={{ once: true }}>At Cairo Studio, we are catalysts for impactful change in the digital realm. Our strategic branding initiatives are designed to revolutionize the digital landscape, creating substantial value in every website and mobile application we design. Join us in transforming the digital experience, driving meaningful change within and beyond your business in website design and mobile application development.</motion.span>
                </div>
            </div>
        </motion.section>
    )
}

export default AboutWhatItFeels