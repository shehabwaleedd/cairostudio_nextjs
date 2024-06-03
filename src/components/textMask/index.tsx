'use client'
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import mainVideoPlaceholder from "../../../public/assets/mainVideoPlaceholder.webp"
import styles from './style.module.scss';

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
                        <p>[S: 03]</p>
                    </div>
                </div>
                <h3>
                    CAIRO STUDIO
                </h3>
            </div>
            <div className={styles.video}>
                <motion.div className={styles.video_cont} style={{ y }} >
                    <video loop autoPlay muted playsInline src="/mainVideo2.mp4" poster={mainVideoPlaceholder.src} security='restricted' preload="metadata" />
                </motion.div>
            </div>

        </section>
    );
};

export default TextMask;
