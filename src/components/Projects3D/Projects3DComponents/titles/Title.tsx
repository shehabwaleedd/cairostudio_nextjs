import React, { useRef } from 'react';
import { useScroll, motion, useTransform, useMotionTemplate } from 'framer-motion';
import { useRouter } from 'next/navigation';

import styles from './style.module.scss';

interface TitleProps {
    data: {
        title: string;
        speed: number;
        i: number;
        link: string;
    };
    setSelectedProject: (index: number | null) => void;
}

const Title: React.FC<TitleProps> = ({ data, setSelectedProject }) => {
    const { title, speed, i, link } = data;
    const container = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', `${20 / speed}vw end`]
    });

    const handleServiceClick = (link: string) => {
        router.push(link);
    }

    const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

    return (
        <div ref={container} className={styles.title}>
            <div onClick={() => handleServiceClick(link)} className={styles.wrapper} onMouseOver={() => setSelectedProject(i)} onMouseLeave={() => setSelectedProject(null)}>
                <motion.p style={{ clipPath: clip }}>
                    {title}
                </motion.p>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default Title;
