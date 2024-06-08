'use client'
import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import styles from './style.module.scss';
import data from "./data"
import Upper from '@/components/upper';
import Card from './card';

export interface ProjectData {
    title: string;
    link: string;
    img: string;
    descTitle: string;
    tags: string[];


}






const ServicesList: React.FC = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })
    return (
        <section className={styles.work}>
            <Upper p1="Services" p2='04' />
            <div className={styles.projectsMain}>
                {data.map((project, i) => {
                    const targetScale = 1 - ((data.length - i) * 0.05);
                    return <Card project={project} key={`p_${i}`} i={i} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}  />
                })}
            </div>
        </section>
    );
};

export default ServicesList;
