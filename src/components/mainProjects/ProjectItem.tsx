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

const ProjectItem = memo(({ item, index }: ProjectItemProps) => (
    <TransitionCard href={`/work/${slugify(item.title, { lower: true })}`} className={styles.mainProjects__item}>
        <div className={styles.mainProjects__container__imgs}>
            <Image
                src={item.poster}
                alt={item.title}
                title={item.title}
                width={500}
                height={500}
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                priority={index === 0}
                placeholder='blur'
                blurDataURL={item.blurDataURL}
                {...{ srcSet: `${item.poster}?w=500 500w, ${item.poster}?w=1000 1000w` }}
            />
        </div>
        <div className={styles.desc}>
            <p>({index + 1})</p>
            <h2 className='title'>{item.title}</h2>
        </div>
    </TransitionCard>
));

ProjectItem.displayName = "ProjectItem";

export default ProjectItem;
