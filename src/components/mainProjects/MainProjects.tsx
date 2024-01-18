import React, { memo } from 'react';
import "./MainProjects.scss";
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
    <Link href={{ pathname: `/case-study/${item.title}` }} className="mainProjects__item">
        <div className="mainProjectsCo__imgs">
            <div className="mainProjects__item__img">
                <Image src={item.poster} alt={item.title}
                    className="mainProjects__item__img__poster"
                    title={item.title}
                    width={500}
                    height={500}
                />
                <p>
                    <span>-{item.date}-</span>
                </p>
            </div>
        </div>
        <div className="mainProjects__item__desc">
            <p>{item.categories.join(' - ')}</p>
            <h2>{item.title}</h2>
        </div>
    </Link>
));

ProjectItem.displayName = "ProjectItem "

const MainProjects = () => {
    const { projects } = useFetchProjects();

    const displayedProjects = React.useMemo(() =>
        projects.filter((project: Project) =>
            ['Lemkus', 'Aldar', 'Innovest'].includes(project.title)
        ),
        [projects]
    );

    return (
        <div className='mainProjects'>
            <div className="mainProjects__container">
                {displayedProjects.map((item, index) => (
                    <ProjectItem item={item} key={index} />
                ))}
            </div>
        </div>
    );
}

export default MainProjects;
