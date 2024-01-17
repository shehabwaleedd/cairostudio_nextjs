'use client'
import React, { useState } from 'react';
import useFetchProjects from '../useFetchProjects/useFetchProjects';
import styles from './MainProjects.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/common/types';
import { useRouter } from 'next/navigation';

const MainProjects: React.FC = () => {
    const { projects } = useFetchProjects();
    const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number | null>(null);

    const displayedProjects: Project[] = projects.filter((project: Project) =>
        ['Lemkus', 'Swag', 'Tiger'].includes(project.title)
    );

    const router = useRouter();

    const handleProjectClick = (title: string) => {
        router.push(`/case-study/${title}`);
    }

    return (
        <div className={styles.mainProjects}>
            <motion.div className={styles.mainProjects__container}>
                {displayedProjects.map((item: Project, index: number) => (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onMouseEnter={() => setHoveredProjectIndex(index)}
                        onMouseLeave={() => setHoveredProjectIndex(null)}
                        className={styles.mainProjects__item}
                        onClick={() => handleProjectClick(item.title)} 
                        key={index}
                    >
                        <div className={styles.mainProjects__item__imgContainer}>
                            <div className={styles.mainProjectsCo__imgs}>
                                <motion.div className={styles.mainProjects__item__img}>
                                    <Image
                                        src={item.poster}
                                        alt={item.title}
                                        placeholder='blur'
                                        sizes='(max-width: 500px) 100vw, 500px, (max-width: 768px) 100vw, 500px, (max-width: 1024px) 100vw, 500px, (max-width: 1280px) 100vw, 500px, (max-width: 1536px) 100vw, 500px, 500px'
                                        blurDataURL={item.poster}
                                        width={500}
                                        height={400}
                                        loading="lazy"
                                        style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}

                                    />
                                    <p><span>-{item.date}-</span></p>
                                    <AnimatePresence mode='wait'>
                                        {hoveredProjectIndex === index && (
                                            <motion.video
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                src={item.mainVideo}
                                                loop
                                                muted
                                                autoPlay
                                                playsInline
                                                style={{
                                                    width: item.title === 'Lemkus' || item.title === 'Block Lords' ? '90%' : '100%',
                                                    left: item.title === 'Lemkus' || item.title === 'WebOGS' ? '5%' : '',
                                                    objectFit: item.title === 'Lemkus' || item.title === 'Block  ' ? 'contain' : 'cover',
                                                }}
                                            />
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </div>
                        </div>
                        <div className={styles.mainProjects__item__desc}>
                            <p>{item.categories.join(' - ')}</p>
                            <h2>{item.title}</h2>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default MainProjects;
