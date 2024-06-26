'use client'
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import mainVideoPlaceholder from "../../../public/assets/mainVideoPlaceholder.webp"
import styles from './style.module.scss';
import Link from 'next/link';

const TextMask: React.FC = () => {
    const container = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);


    return (
        <section className={styles.textMask} ref={container} style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
            <div className={styles.absText}>
                <div className={styles.upper}>
                    <div className={styles.upper_top}>
                        <p>BRIEF</p>
                        <p>[S: 06]</p>
                    </div>
                </div>
                <Link href="/contact">
                    Contact Us
                </Link>
            </div>
            <div className={styles.video}>
                <motion.div className={styles.video_cont} style={{ y }} >
                    <video loop autoPlay muted playsInline src="https://res.cloudinary.com/ds20vy7zo/video/upload/v1717735417/mainVideo2_crsbvz.mp4" poster={mainVideoPlaceholder.src} security='restricted' preload="none" />
                </motion.div>
            </div>

        </section>
    );
};

export default TextMask;
