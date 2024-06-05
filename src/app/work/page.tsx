'use client'
import React from 'react';
import useFetchProjects from '../../components/useFetchProjects/useFetchProjects';
import RelatedWork from '../../components/relatedWork/RelatedWork';
import { FetchProjectsResponse, Project } from '@/common/types';


const ProjectsPage: React.FC = () => {
    const { projects, loading, error }: FetchProjectsResponse = useFetchProjects();
    const allProjectsNames: string[] = projects.map((project: Project) => project.title);
    if (loading) return <div>LOADING</div>;

    if (error) return <div>{error}</div>


    return (
        <RelatedWork relatedNames={allProjectsNames} heading='Our Projects' />
    );
}

export default ProjectsPage;