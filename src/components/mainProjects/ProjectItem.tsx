import React, { memo } from 'react';
import styles from "./style.module.scss";
import Image from 'next/image';
import { TransitionCard } from '../transitionLink';

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
    <TransitionCard href={`/work/${item.title}`} className={styles.mainProjects__item}>
        <div className={styles.mainProjects__container__imgs}>
            <Image
                src={item.poster}
                alt={item.title}
                title={item.title}
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={true}
                placeholder='blur'
                blurDataURL={item.blurDataURL}
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
