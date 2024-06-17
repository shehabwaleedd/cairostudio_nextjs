'use client'
import React, { useState } from 'react';
import { Project } from '@/common/types';
import styles from "./style.module.scss"
import { motion, AnimatePresence } from "framer-motion"

import { TransitionH4 } from '@/components/transitionLink';
const ServicesCards = ({ displayedProjects }: { displayedProjects: Project[] }) => {
    const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number | null>(null);
    const [hoveredLearnMoreIndex, setHoveredLearnMoreIndex] = useState<number | null>(null);

    return (
        <div className={styles.services__container_lower}>
            {displayedProjects.map((item: Project, index: number) => (
                <div className={styles.services__container} key={index}>
                    <motion.div className={styles.seco__left}>
                        <h2>{item.serviceTitle}</h2>
                        <p>
                            {item.serviceDescription}
                        </p>
                        <div className={styles.navigationService}>
                            <TransitionH4 href={`/services/${item.serviceTitle}`} label="Learn More" />
                        </div>
                    </motion.div>
                    <div className={styles.seco__right} onMouseEnter={() => setHoveredProjectIndex(index)} onMouseLeave={() => setHoveredProjectIndex(null)} >
                        <div className={styles.seco__right_img} style={{ backgroundImage: item.title === "Lemkus" ? `url(${item.homePage})` : `url(${item.poster})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }}>
                            <AnimatePresence mode='wait'>
                                {(hoveredProjectIndex === index || hoveredLearnMoreIndex === index) && (
                                    <motion.video
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        src={item.mainVideo}
                                        style={{
                                            width: item.title === 'Lemkus' || item.title === 'Block Lords' ? '70%' : '100%',
                                            left: item.title === 'Lemkus' || item.title === 'Block Lords' ? '15%' : '',
                                            objectFit: item.title === 'Lemkus' || item.title === 'Block Lords' ? 'contain' : 'cover',
                                        }}
                                        loop
                                        muted
                                        autoPlay
                                        playsInline
                                    />
                                )}
                            </AnimatePresence>
                        </div>
                        <div className={styles.secori__lower}>
                            <div className={styles.secorilo__spans}>
                                <div>
                                    {item.categories.map((element, index) => (
                                        <span key={index}>
                                            {index > 0 ? ' -  ' : ''}
                                            {element}
                                        </span>
                                    ))}
                                </div>
                                <span>{item.date}</span>
                            </div>
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ServicesCards