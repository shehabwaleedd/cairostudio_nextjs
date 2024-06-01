import React, { memo } from 'react';
import styles from "./style.module.scss";
import useFetchProjects from '@/hooks/useFetchProjects';
import Link from 'next/link';
import Image from 'next/image';


interface Project {
    title: string;
    poster: string;
    date: string;
    categories: string[];
}

interface ProjectItemProps {
    item: Project;
}

const ProjectItem = memo(({ item }: ProjectItemProps) => (
    <Link href={{ pathname: `/case-study/${item.title}` }} className={styles.mainProjects__item}>
        <div className={styles.mainProjects__container__imgs}>
            <div className={styles.mainProjects__container__imgs_img}>
                <Image src={item.poster} alt={item.title}
                    title={item.title}
                    width={500}
                    height={500}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={true}
                    placeholder='blur'
                    blurDataURL={item.poster}
                />
                <p>
                    <span>-{item.date}-</span>
                </p>
            </div>
        </div>
        <div className={styles.mainProjects__item__desc}>
            <p>{item.categories.join(' - ')}</p>
            <h2 className='title'>{item.title}</h2>
        </div>
    </Link>
));

ProjectItem.displayName = "ProjectItem"

const MainProjects = () => {
    const { projects } = useFetchProjects();

    const displayedProjects = React.useMemo(() =>
        projects.filter((project: Project) =>
            ['Lemkus', 'Aldar', 'Innovest'].includes(project.title)
        ),
        [projects]
    );

    return (
        <div className={styles.mainProjects}>
            <div className={styles.mainProjects__container}>
                {displayedProjects.map((item: Project, index: number) => (
                    <ProjectItem item={item} key={index} />
                ))}
            </div>
        </div>
    );
}

export default MainProjects;
