import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import "./sass/AboutFC.scss"
const AboutFC = () => {
    const ref = useRef(null)
    return (
        <motion.section ref={ref} className="our__founding__content">
            <motion.h3 initial={{ x: 50, opacity: 0 }} whileInView={{ x: 10, opacity: 1 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }} viewport={{ once: true }}>THE PERSON WHO WANTED A CHANGE</motion.h3>
            <motion.span initial={{ x: 50, opacity: 0 }} whileInView={{ x: 10, opacity: 1 }} transition={{ staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] }} viewport={{ once: true }}>
                Shehab&apos;s dedication to the web and its content has been a lifelong passion. Growing up, he recognized the immense potential of the digital landscape. However, he couldn&apos;t ignore the underwhelming quality of local websites. This fueled his belief that Egypt deserved the highest standards in its digital offerings, spanning websites, apps, and broader digital services.
                Motivated by this conviction, Shehab chose to be a catalyst for change rather than a bystander. Instead of waiting for others to realize his vision, he took the initiative to bring it to life. As a committed frontend developer, he immersed himself in web development, striving to create exceptional digital experiences.
                His ambition extended beyond national borders as he aimed to establish a remarkable global presence. With unwavering determination, Shehab set out to impact not only the local scene but also garner attention and recognition on the international stage. Fueled by a desire to rival industry giants, he endeavored to showcase his distinctive approach and carve a unique path in the vast and competitive world of digital development.
            </motion.span>
        </motion.section>
    )
}

export default AboutFC