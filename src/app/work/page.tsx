'use client'
import React from 'react';
import useFetchProjects from '../../components/useFetchProjects/useFetchProjects';
import './ProjectsPage.scss';
import RelatedWork from '../../components/relatedWork/RelatedWork';
import { FetchProjectsResponse, Project } from '@/common/types';
import Stairs from '../../animations/transition/Stairs';

const ProjectsPage: React.FC = () => {
    const { projects, loading, error }: FetchProjectsResponse = useFetchProjects();
    const allProjectsNames: string[] = projects.map((project: Project) => project.title);
    if (loading) return <div>LOADING</div>;

    if (error) return <div>{error}</div>

    const heading: string = "Our Projects";

    return (
        <Stairs>
            <RelatedWork relatedNames={allProjectsNames} heading={heading} />
        </Stairs>
    );
}

export default ProjectsPage;