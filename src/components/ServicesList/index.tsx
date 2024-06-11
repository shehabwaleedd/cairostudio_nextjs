import React from 'react';
import styles from './style.module.scss';
import data from "./data"
import Card from './card';
import Upper from '@/components/upper';

export interface ProjectData {
    title: string;
    link: string;
    img: string;
    descTitle: string;
    tags: string[];
    

}

const ServicesList = ({ p2 }: { p2: string }) => {

    return (
        <section className={styles.work}>
            <Upper p1="Services" p2={p2} />
            <div className={styles.projectsMain}>
                {data.map((project, i) => {
                    return <Card project={project} key={`p_${i}`} i={i} />
                })}
            </div>
        </section>
    );
};

export default ServicesList;
