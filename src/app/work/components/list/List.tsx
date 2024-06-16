import React from 'react';
import { Project } from '@/common/types';
import WorkedWith from '@/components/workedWith';


interface ListProps {
    filteredProjects: Project[];
    handleProjectClick: (index: number) => void;
}

const List: React.FC<ListProps> = ({ filteredProjects }) => {
    const data = filteredProjects.map(project => ({
        id: Number(project.id),
        name: project.title,
        desc: project.description ? [project.description] : [],
        categories: project.categories,
        insideSlider: true
    }));

    return (
        <WorkedWith Data={data} filteredProjects={filteredProjects} />
    );
};

export default List;
