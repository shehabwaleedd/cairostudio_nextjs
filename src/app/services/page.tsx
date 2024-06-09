import React from 'react';
import ServicesData from '@/app/studio/aboutComponents/aboutServices/Data'
import Link from 'next/link';
import serverFetchData from '@/lib/serverFetchData';
import { Project } from '@/common/types';
import styles from "./page.module.scss"
import ServicesCards from './components/services';
import Header from './components/Header';





const Services: React.FC = async () => {

    let projects: Project[] = [];
    let error: string | null = null;

    try {
        projects = await serverFetchData();
    } catch (err) {
        error = (err as Error).message;
    }


    const relatedNames = ['Lemkus', 'Banyana', 'Block Lords'];


    const displayedProjects = projects?.filter((project: Project) => relatedNames.includes(project.title));



    if (error) {
        return <div>{error}</div>;
    }

    return (
        <main className={styles.services}>
            <Header />

            <ServicesCards displayedProjects={displayedProjects}/>
            <div className={styles.services__bottom}>
                <div className={styles.services__bottom_container}>
                    
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