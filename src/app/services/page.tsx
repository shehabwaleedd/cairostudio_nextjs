'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import ServicesData from './ServiceData'
import Link from 'next/link';
import useFetchProjects from '@/hooks/useFetchProjects';
import { Project } from '@/common/types';
import { useRouter } from 'next/navigation';
import styles from "./page.module.scss"



const Services: React.FC = () => {
    const { projects, loading, error } = useFetchProjects();

    const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number | null>(null);
    const [hoveredLearnMoreIndex, setHoveredLearnMoreIndex] = useState<number | null>(null);

    const relatedNames = ['Lemkus', 'Banyana', 'Block Lords'];


    const displayedProjects = projects.filter((project: Project) => relatedNames.includes(project.title));

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const router = useRouter();

    const handleProjectClick = (title: string) => {
        router.push(`/services/${title}`);
    }

    if (loading) {
        return <div>LOADING</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <main className={styles.services}>
            <h1> TRANSFORMING IDEAS INTO <br /> DIGITAL EXPERIENCES </h1>
            <section className={styles.services__container_upper}>
                <p>CREATIVELY DRIVEN <br /> SOLUTION ORIENTATED</p>
                <div className={styles.servicesSpans}>
                    <span>In today&apos;s competitive market, good enough is no longer sufficient. We strive for holistic excellence in every aspect of our process. Our solutions go beyond expectations, delivering possibilities our clients didn&apos;t know existed for their brand.</span>
                    <span>Our work is conceptually rooted, strategically driven, and executed by creative minds who understand the bigger picture. We specialize in crafting brands, designing websites, and building exceptional digital experiences.</span>
                </div>
            </section>
            <div className={styles.services__container_lower}>
                {displayedProjects.map((item: Project, index: number) => (
                    <div className={styles.services__container} key={index}>
                        <motion.div className={styles.seco__left}>
                            <h2>{item.serviceTitle}</h2>
                            <p>
                                {item.serviceDescription}
                            </p>
                            <div className={styles.navigationService} onClick={() => handleProjectClick(item.serviceTitle)}
                                onMouseEnter={() => setHoveredLearnMoreIndex(index)}
                                onMouseLeave={() => setHoveredLearnMoreIndex(null)}>
                                <h3>
                                    {hoveredLearnMoreIndex === index
                                        ? `Learn More On ${item.serviceTitle}`
                                        : 'Learn More'}
                                </h3>
                            </div>
                        </motion.div>
                        <div className={styles.seco__right} onMouseEnter={() => setHoveredProjectIndex(index)} onMouseLeave={() => setHoveredProjectIndex(null)} >
                            <div className={styles.seco__righ_img} style={{ backgroundImage: item.title === "Lemkus" ? `url(${item.homePage})` : `url(${item.poster})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }}>
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
            <div className={styles.services__bottom}>
                <div className={styles.services__bottom_container}>
                    <div className={styles.seboco__left}>
                        <div className={styles.services__bottom_container_left}>
                            <h2>SERVICES <br /> UNPACKED</h2>
                            <p>ELEVATING BRANDS WITH CUTTING-EDGE DIGITAL DESIGN AND BRANDING SOLUTIONS.</p>
                        </div>
                        <Link href="/contact">
                            <h3>Let&apos;s Talk</h3>
                        </Link>
                    </div>
                    <div className={styles.seboco__right}>
                        <div className={styles.services__bottom_container_right}>
                            {ServicesData.map((item, index) => (
                                <div key={index} className={styles.services__bottom_container_right_section}>
                                    <h2>{item.title}</h2>
                                    {item.elements.map((element, index) => (
                                        <div key={index} className={styles.services__details_container}>
                                            <p >{element.text}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Services