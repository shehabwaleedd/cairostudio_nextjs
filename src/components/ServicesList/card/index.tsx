'use client'

import React, { useRef } from 'react';
import styles from "../style.module.scss";
import { motion, useScroll, useTransform } from 'framer-motion';
import { ProjectData } from '..';
import Link from 'next/link';
import Image from 'next/image';
import useWindowSize from '@/hooks/useWindowWidth';

const Card = ({
    project,
    i,
    progress,
    range,
    targetScale
}: {
    project: ProjectData,
    i: number,
    progress: any,
    range: any,
    targetScale: number
}) => {
    const container = useRef(null);
    const { windowWidth } = useWindowSize();
    const isDesktopOrLarger = windowWidth !== null && windowWidth >= 1200;

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div 
            className={styles.cardContainer} 
            key={i} 
            ref={container} 
            style={isDesktopOrLarger ? { position: 'sticky', top: '4vh' } : { position: 'relative' }}
        >
            <div className={styles.wrapper}>
                <motion.div style={{ scale, top: `0` }} className={styles.card}>
                    <div className={styles.upper}>
                        <p>{project.descTitle}</p>
                        <Link href={project.link}>{project.title}</Link>
                        <ul>
                            {project.tags.slice(0, 3).map((tag, i) => (
                                <li key={i}>{tag}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.lower}>
                        <Image
                            src={project ? project.img : ""}
                            alt=""
                            width={1920}
                            height={1260}
                            placeholder='blur'
                            blurDataURL={project.img}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Card;
