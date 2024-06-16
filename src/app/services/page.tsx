import React from 'react';
import ServicesData from '@/app/studio/Data'
import serverFetchData from '@/lib/serverFetchData';
import { Project } from '@/common/types';
import styles from "./page.module.scss"
import ServicesCards from './components/services';
import Header from './components/Header';
import ServicesSplit from '@/components/servicesSplit';



const Services: React.FC = async () => {

    let projects: Project[] = [];
    let error: string | null = null;

    try {
        projects = await serverFetchData();
    } catch (err) {
        error = (err as Error).message;
    }


    const order = ['Tag Media', 'Cairo Hosts', 'Lemkus', 'Aldar'];

    const displayedProjects = projects
        .filter((project: Project) => order.includes(project.title))
        .sort((a: Project, b: Project) => order.indexOf(a.title) - order.indexOf(b.title));




    if (error) {
        return <div>{error}</div>;
    }

    return (
        <main className={styles.services}>
            <Header />
            <ServicesCards displayedProjects={displayedProjects} />x

            <ServicesSplit data={ServicesData}/>

        </main>
    )
}

export default Services