import React, { memo } from 'react';
import styles from "./style.module.scss";
import Image from 'next/image';
import { TransitionCard } from '../transitionLink';
import slugify from 'slugify'; // Import slugify library

interface Project {
    id: string;
    title: string;
    poster: string;
    date: string;
    categories: string[];
    blurDataURL?: string;
}

interface ProjectItemProps {
    item: Project;
    index: number;
}

const imageSizes = {
    pyramids: { width: 475, height: 316 },
    lemkus: { width: 281, height: 375 },
    cairoHosts: { width: 354, height: 236 },
    tagMedia: { width: 475, height: 356 },
    alDar: { width: 475, height: 594 }
};

const getImageSize = (title: string) => {
    switch (slugify(title, { lower: true })) {
        case 'pyramids': return imageSizes.pyramids;
        case 'lemkus': return imageSizes.lemkus;
        case 'cairo-hosts': return imageSizes.cairoHosts;
        case 'tag-media': return imageSizes.tagMedia;
        case 'al-dar': return imageSizes.alDar;
        default: return { width: 500, height: 500 }; // default fallback
    }
}

const ProjectItem = memo(({ item, index }: ProjectItemProps) => {
    const { width, height } = getImageSize(item.title);

    return (
        <TransitionCard href={`/projects/${slugify(item.title, { lower: true })}`} className={styles.mainProjects__item}>
            <div className={styles.mainProjects__container__imgs}>
                <Image
                    src={item.poster}
                    alt={item.title}
                    title={item.title}
                    width={width}
                    height={height}
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                    priority={index === 0} // Prioritize the first image for better LCP
                    placeholder='blur'
                    blurDataURL={item.blurDataURL}
                    quality={75}
                />
            </div>
            <div className={styles.desc}>
                <p>({index + 1})</p>
                <h2 className='title'>{item.title}</h2>
            </div>
        </TransitionCard>
    );
});

ProjectItem.displayName = "ProjectItem";

export default ProjectItem;
