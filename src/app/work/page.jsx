'use client'
import React from 'react'
import useFetchProjects from '../../components/useFetchProjects/useFetchProjects'
import './ProjectsPage.scss'
import RelatedWork from '../../components/relatedWork/RelatedWork';
import Loading from '../../utils/loading/Loading';

const ProjectsPage = () => {
    const { projects, isLoading, error } = useFetchProjects();

    const allProjectsNames = projects.map(project => project.title);

    if (isLoading) return <Loading height={100}/>

    if (error) return <div>{error}</div>

    


    return (
        <RelatedWork relatedNames={allProjectsNames} heading={"Our Projects"} />
    )
}

export default ProjectsPage