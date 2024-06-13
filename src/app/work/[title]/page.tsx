import React from 'react';
import { Metadata } from 'next';
import styles from './page.module.scss';
import RenderImages from './RenderImages';
import Upper from './components/Upper';
import { Project } from '@/common/types';
import serverFetchData from '@/lib/serverFetchData';
import slugify from 'slugify'; 

interface ProjectsDetailsProps {
    params: { title: string };
}

export async function generateMetadata({ params }: ProjectsDetailsProps): Promise<Metadata> {
    const projects = await serverFetchData();
    const project = projects.find(p => p.title === params.title);

    if (!project) {
        return {
            title: 'Project Not Found - Cairo Studio',
            description: 'The project you are looking for does not exist.',
        };
    }

    const url = `https://www.cairostudio.com/case-study/${params.title}`;


    return {
        title: `${project.title} - Cairo Studio`,
        description: project.introduction.slice(0, 165),
        openGraph: {
            type: 'website',
            url,
            title: project.title,
            description: project.introduction,
            images: [
                {
                    url: project.cover,
                    width: 800,
                    height: 600,
                    alt: project.title,
                },
            ],
            siteName: 'Cairo Studio',
        },
        twitter: {
            card: 'summary_large_image',
            title: project.title,
            description: project.introduction,
            images: [project.cover],
        },
        robots: {
            index: true,
            follow: true,
            nocache: true,
        },
        alternates: {
            canonical: url,
        },
    };
}


export async function generateStaticParams() {
    const projects = await serverFetchData();
    return projects.map(project => ({ params: { title: slugify(project.title, { lower: true }) } }));
}


const ProjectsDetails: React.FC<ProjectsDetailsProps> = async ({ params }) => {
    let project: Project | null = null;
    let error: string | null = null;

    try {
        const projects = await serverFetchData();
        project = projects.find(p => slugify(p.title, { lower: true }) === params.title) || null;

    } catch (err) {
        error = (err as Error).message;
    }

    if (error) return <p className={styles.error}>Error: {error}</p>;
    if (!project) return <p>NOT FOUND</p>;

    const renderCollectiveItems = (type: string) => {
        const items = project.collectiveItems.find(item => item.type === type)?.items;
        return items ? <RenderImages items={items} /> : null;
    };

    return (
        <main className={styles.projectsDetails}>
            <section className={styles.projectsDetails_left}>
                {renderCollectiveItems('projectImages')}
            </section>
            <section className={styles.projectsDetails_right}>
                <Upper project={project} />
            </section>
        </main>
    );
};

export default ProjectsDetails;
