import React, { memo } from 'react';
import styles from "./style.module.scss";
import useFetchProjects from '@/hooks/useFetchProjects';
import Link from 'next/link';
import Image from 'next/image';
import Upper from '../upper';


interface Project {
    title: string;
    poster: string;
    date: string;
    categories: string[];
}

interface ProjectItemProps {
    item: Project;
    index: number
}

const ProjectItem = memo(({ item, index }: ProjectItemProps) => (
    <Link href={{ pathname: `/case-study/${item.title}` }} className={styles.mainProjects__item}>
        <div className={styles.mainProjects__container__imgs}>
            <Image src={item.poster} alt={item.title}
                title={item.title}
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={true}
                placeholder='blur'
                blurDataURL={item.poster}
            />
        </div>
        <div className={styles.desc}>
            <p>({index + 1})</p>
            <h2 className='title'>{item.title}</h2>
        </div>
    </Link>
));

ProjectItem.displayName = "ProjectItem"

const MainProjects = () => {
    const { projects } = useFetchProjects();

    const displayedProjects = React.useMemo(() =>
        projects.filter((project: Project) =>
            ['Lemkus', 'Aldar', 'Innovest', 'Tiger', 'Swag'].includes(project.title)
        ),
        [projects]
    );

    const numberOfProjects = projects.length || 0;

    return (
        <div className={styles.mainProjects}>

            <Upper p1="Latest Work" p2="01" label="All Work" link='/work' h2="Latest" secondRow={true} span={`${numberOfProjects}`} />

            <div className={styles.mainProjects__container}>
                {displayedProjects.map((item: Project, index: number) => (
                    <ProjectItem item={item} key={index} index={index} />
                ))}
            </div>
        </div>
    );
}

export default MainProjects;
