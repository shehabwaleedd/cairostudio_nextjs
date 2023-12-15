'use client'
import React, { useState, useCallback } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import useFetchProjects from '../useFetchProjects/useFetchProjects'
import Image from 'next/image'
import { Project,  ProjectState, RelatedWorkProps } from '@/common/types'

import '../../app/work/ProjectsPage.scss'


const RelatedWork: React.FC<RelatedWorkProps> = ({ relatedNames, heading }) => {
    const { projects } = useFetchProjects();
    const [project, setProject] = useState<Project | null>(null);
    const [projectState, setProjectState] = useState<ProjectState>({
        detailsOpened: false,
        selectedProjectIndex: null,
        hoveredProjectIndex: null,
    });


    const relatedProjects = projects.filter((project: Project) => relatedNames.includes(project.title));

    const handleProjectClick = useCallback((index: number) => {
        const selectedProject = projects[index];
        if (selectedProject) {
            setProject(selectedProject);
            setProjectState({
                ...projectState,
                detailsOpened: true,
                selectedProjectIndex: index
            });
        }
    }, [projects, projectState]);


    const handleDetailsClose = useCallback(() => {
        setProjectState({
            ...projectState,
            selectedProjectIndex: null,
            detailsOpened: false,
        });
    }, [projectState]);



    return (
        <section className="projectsPage">
            <motion.h2 initial={{ opacity: 0, y: 110, skewY: 10 }}>{heading}</motion.h2>
            <div className="projectsPage__container">
                <AnimatePresence mode='wait'>
                    {projectState.detailsOpened && project ? (<div className='projectsPageCo__content'></div>
                    ) : (
                        <motion.div className="projectsPageCo__content" initial={{ opacity: 0, y: 100 }} transition={{ duration: 0.4, type: "spring", damping: 12, stiffness: 100, ease: [0.42, 0, 0.58, 1] }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }}>
                            {relatedProjects.map((project: Project, index: number) => {
                                return (
                                    <div className="projectsPageCo__items" onClick={() => handleProjectClick(index)}
                                        onMouseEnter={() => setProjectState({ ...projectState, hoveredProjectIndex: index })}
                                        onMouseLeave={() => setProjectState({ ...projectState, hoveredProjectIndex: null })}
                                        key={index}>
                                        <div className="projectsPageCo__item">
                                            <div className="projectsPageCo__item__img" style={{
                                                backgroundImage: `url(${project.homePage})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat',
                                            }}>
                                                <AnimatePresence mode='wait'>
                                                    {projectState.hoveredProjectIndex === index && (
                                                        <motion.video
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                            src={project.mainVideo}
                                                            style={{
                                                                width: project.title === 'Lemkus' || project.title === 'Block Lords' ? '70%' : '100%',
                                                                left: project.title === 'Lemkus' || project.title === 'Block Lords' ? '15%' : '',
                                                                objectFit: project.title === 'Lemkus' || project.title === 'Block Lords' ? 'contain' : 'cover',
                                                            }}
                                                            loop
                                                            muted
                                                            autoPlay
                                                            playsInline
                                                            height="100%"
                                                            width="100%"
                                                            title={project.title}
                                                        />
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                            <div className="projectsPageCo__item__desc">
                                                <div className="projects__item_desc-combined">
                                                    <p>{project.categories.join(" - ")}</p>
                                                    <p>{project.date}</p>
                                                </div>
                                                <h3>{project.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence mode='wait'>
                    {projectState.detailsOpened && projectState.selectedProjectIndex !== null && relatedProjects[projectState.selectedProjectIndex] && (
                        <motion.div className="projectsPageCo__details" initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }}>
                            <div className="projectsPageCo__details__container__close" onClick={handleDetailsClose}>
                                <span>{(relatedProjects[projectState.selectedProjectIndex] as Project).index}</span>
                                <h3>{(relatedProjects[projectState.selectedProjectIndex] as Project).title}</h3>
                                <span>Close</span>
                            </div>
                            <div className="projectsPageCo__deCo">
                                <motion.div className="projectsPageCo__details__container">
                                    {relatedProjects[projectState.selectedProjectIndex] && (relatedProjects[projectState.selectedProjectIndex] as Project).collectiveItems &&
                                        (relatedProjects[projectState.selectedProjectIndex] as Project)?.collectiveItems
                                            ?.filter(item => item.type === 'projectImages')[0]?.items.map((detail, index) => (
                                                <div className="projectsPageCo__details__container__item" key={index}>
                                                    {detail.isImg ? (
                                                        <div className="projectsPageCo__details__container__item__img">
                                                            <Image src={detail.image} alt={`Project Img ${index}`} loading="lazy" placeholder='blur' width={500} height={300} blurDataURL={detail.image}/>
                                                        </div>
                                                    ) : (
                                                        <div className="projectsPageCo__details__container__item__video">
                                                            <video src={detail.image} loop muted autoPlay playsInline title={`Project Video ${index}`}  />
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section >
    )
}

export default RelatedWork