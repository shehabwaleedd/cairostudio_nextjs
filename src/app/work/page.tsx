import React from 'react';
import serverFetchData from '@/lib/serverFetchData';
import RelatedWork from '@/components/relatedWork/RelatedWork';
import { Project } from '@/common/types';

export async function generateMetadata() {
    const baseTitle = 'Our Work - Cairo Studio';
    const baseDescription = 'Discover the diverse and creative projects by Cairo Studio. Our portfolio showcases a wide range of work, from branding and design to development and strategy.';

    let allProjectsNames: string[] = [];
    let error: string | null = null;

    try {
        const projects: Project[] = await serverFetchData();
        allProjectsNames = projects.map((project: Project) => project.title);
    } catch (err) {
        error = (err as Error).message;
    }

    const projectTitles = allProjectsNames.join(', ');
    const dynamicDescription = `${baseDescription} Featuring projects like ${projectTitles}.`;

    return {
        title: baseTitle,
        description: dynamicDescription,
        keywords: 'Cairo Studio, projects, portfolio, branding, design, development, strategy',
        openGraph: {
            title: baseTitle,
            description: dynamicDescription,
            url: 'https://www.cairo-studio.com/work',
            type: 'website',
            images: [
                {
                    url: 'https://res.cloudinary.com/ds20vy7zo/image/upload/v1718564315/og_pgmuwr.webp',
                    width: 1200,
                    height: 630,
                    alt: 'Cairo Studio Projects',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: baseTitle,
            description: dynamicDescription,
            images: [
                {
                    url: 'https://res.cloudinary.com/ds20vy7zo/image/upload/v1718564315/og_pgmuwr.webp', 
                    alt: 'Cairo Studio Projects',
                },
            ],
        },
    };
}

const ProjectsPage = async () => {
    let allProjectsNames: string[] = [];
    let error: string | null = null;

    try {
        const projects: Project[] = await serverFetchData();
        allProjectsNames = projects.map((project: Project) => project.title);
        console.log(allProjectsNames, "allProjectsNames");
    } catch (err) {
        error = (err as Error).message;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <RelatedWork relatedNames={allProjectsNames} heading='Our Projects' />
    );
}

export default ProjectsPage;
