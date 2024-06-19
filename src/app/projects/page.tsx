import React from 'react';
import serverFetchData from '@/lib/serverFetchData';
import RelatedWork from '@/components/relatedWork/RelatedWork';
import { Project } from '@/common/types';
import slugify from 'slugify';


export async function generateMetadata() {
    const baseTitle = 'Our Projects - Cairo Studio';
    const baseDescription = 'Discover the diverse and creative projects by Cairo Studio. Our portfolio showcases a wide range of work, including web development, UI/UX design, graphic design, branding, and strategy.';
    const url = "https://cairo-studio.com/projects";
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
        keywords: 'Cairo Studio, projects, portfolio, branding, design, development, strategy, web development, UI/UX, graphic design, مشاريع, استوديو القاهرة, تطوير الويب, تصميم واجهة المستخدم, تصميم الجرافيك',
        openGraph: {
            title: baseTitle,
            description: dynamicDescription,
            url,
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
        alternates: {
            canonical: url
        }
    };
}

export async function generateStaticParams() {
    const projects = await serverFetchData();
    return projects.map(project => ({ params: { title: slugify(project.title, { lower: true }) } }));
}

export const revalidate = 60 * 60 * 24 * 30;

const ProjectsPage = async () => {
    let allProjectsNames: string[] = [];
    let error: string | null = null;

    try {
        const projects: Project[] = await serverFetchData();
        allProjectsNames = projects.map((project: Project) => project.title);
    } catch (err) {
        error = (err as Error).message;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <h1 style={{ display: "none" }}> Our Projects - Cairo Studio</h1>
            <RelatedWork relatedNames={allProjectsNames} heading='Our Projects' />
        </>
    );
}

export default ProjectsPage;
