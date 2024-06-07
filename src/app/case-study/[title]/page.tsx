'use client';
import React  from 'react';
import styles from "./page.module.scss";
import RenderImages from './RenderImages';
import Upper from './components/Upper';
import useFetchProjects from '@/hooks/useFetchProjects';

const ProjectsDetails = ({ params }: { params: { title: string; } }) => {
    const { projects, loading, error } = useFetchProjects();

    const project = projects.find((p) => p.title === params.title);

    if (error) return <p className={styles.error}>Error: {error}</p>;
    if (!project) return <p>NOT FOUND</p>;

    const renderCollectiveItems = (type: string) => {
        const items = project.collectiveItems.find((item) => item.type === type)?.items;
        return items ? <RenderImages items={items} /> : null;
    };


    return (
        <main className={styles.projectsDetails} >
            <section className={styles.projectsDetails_left}>
                {renderCollectiveItems('userExpImage')}
                {renderCollectiveItems('designSystem')}
                {renderCollectiveItems('collective1')}
                {renderCollectiveItems('collectiveGrid')}
                {renderCollectiveItems('collectiveDraggable')}
                {renderCollectiveItems('filterImage')}
                {renderCollectiveItems('interactionVideo')}
                {renderCollectiveItems('collective2')}
            </section>
            <section className={styles.projectsDetails_right}>
                <Upper project={project} />
            </section>
        </main>
    );
};

export default ProjectsDetails;
