import { MetadataRoute } from 'next';
import serverFetchData from '@/lib/serverFetchData';
import { Project } from '@/common/types';

interface UrlObject {
    url: string;
    lastModified: Date;
    changeFrequency: "weekly" | "yearly" | "always" | "hourly" | "daily" | "monthly" | "never" | undefined;
    priority: number;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    let projectEntries: Project[] = [];
    try {
        projectEntries = await serverFetchData();
    } catch (error) {
        console.error('Failed to fetch project entries:', error);
    }

    const projectUrls: UrlObject[] = projectEntries.map((project) => ({
        url: `https://www.cairo-studio.com/projects/${slugify(project.title)}`,
        lastModified: new Date(new Date()),
        changeFrequency: 'weekly',
        priority: 0.6,
    }));

    return [
        { url: 'https://www.cairo-studio.com', lastModified: new Date(), changeFrequency: 'yearly', priority: 1 },
        { url: 'https://www.cairo-studio.com/studio', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: 'https://www.cairo-studio.com/services', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.5 },
        { url: 'https://www.cairo-studio.com/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 1 },
        { url: 'https://www.cairo-studio.com/projects', lastModified: new Date(), changeFrequency: 'yearly', priority: 1 },
        { url: 'https://www.cairo-studio.com/services/e-commerce', lastModified: new Date(), changeFrequency: 'yearly', priority: 1 },
        { url: 'https://www.cairo-studio.com/services/graphic-design', lastModified: new Date(), changeFrequency: 'yearly', priority: 1 },
        { url: 'https://www.cairo-studio.com/services/web-development', lastModified: new Date(), changeFrequency: 'yearly', priority: 1 },
        { url: 'https://www.cairo-studio.com/services/branding', lastModified: new Date(), changeFrequency: 'yearly', priority: 1 },
        ...projectUrls,
    ];
}

const slugify = (title: string): string => {
    return title
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
};
