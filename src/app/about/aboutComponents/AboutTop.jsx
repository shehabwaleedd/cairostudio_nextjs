'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import aboutlanding from "../../../../public/aboutlanding.webp"
import Image from 'next/image';
const AboutTop = () => {
    const ref = useRef(null);
    const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', '98% end'],
    });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const scrolldown = useTransform(scrollYProgress, [0, 1], ['-5rem', '0rem']);

    return (
        <motion.section className='aboutTop' ref={ref}>
            <div className="aboutTop__container">
                <motion.h2 initial={{ opacity: 0, x: 40, transition: { duration: 0.4, type: "spring", damping: 12, staggerChildren: 2.5, stiffness: 100, ease: [0.42, 0, 0.58, 1] } }} whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, type: "spring", staggerChildren: 2.5, damping: 12, stiffness: 100, ease: [0.42, 0, 0.58, 1] } }} viewport={{ once: true }}>Based In Cairo <br /> Working Worldwide</motion.h2>
                <h3>
                    Cairo Studio is a multidisciplinary, independent design studio established in Cairo. We make start-ups, art platforms, organizations, institutions, global companies, and tailor-made designs for bold brands. With our interdisciplinary working system, in all areas of interaction that make up the experiences of brands.
                </h3>
            </div>
            <h3>
                We provide support in graphic design, packaging, display, brand creation, identity development, user experience, mobile – web UI / UX, and communication. We combine insight, analysis, research and technology in our work, along with an international design approach. We believe in people-centric design, user-friendly products, well-designed experiences, and businesses that value them, and we help them grow.
            </h3>
            <motion.div
                style={{ scale: scale, y: scrolldown }}
                transition={transition}
            >
                <Image
                    src={aboutlanding}
                    alt="our company"
                    title='company'
                    quality={100}
                    
                />
            </motion.div>
        </motion.section>
    )
}

export default AboutTop