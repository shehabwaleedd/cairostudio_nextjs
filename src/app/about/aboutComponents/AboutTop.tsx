'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import aboutlanding from "../../../../public/aboutlanding.webp"
import Image from 'next/image';
import styles from "../page.module.scss";
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
        <motion.section className={styles.aboutTop} ref={ref}>
            <div className={styles.aboutTop__container}>
                <h2>Based In Cairo <br /> Working Worldwide</h2>
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