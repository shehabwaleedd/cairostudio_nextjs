import React from 'react';
import styles from './style.module.scss';
import data from "./data"
import Upper from '@/components/upper';
import Titles from './titles';

const ServicesList: React.FC = () => {
    return (
        <section className={styles.work}>
            <Upper p1="Services" p2='04' />
            <div className={styles.projectsMain}>
                <Titles data={data} />
            </div>
        </section>
    );
};

export default ServicesList;
