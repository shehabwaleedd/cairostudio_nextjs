import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import styles from "@/app/projects/page.module.scss"
import { Project, ProjectState } from '@/common/types'

const Layout = ({ projectState, setProjectState, filteredProjects, handleProjectClick }: { projectState: ProjectState; setProjectState: any; filteredProjects: Project[]; handleProjectClick: any; }) => {
    return (
        <AnimatePresence mode='wait'>
            <motion.div className={styles.projectsPageCo__content} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, type: "spring", damping: 12, stiffness: 100, ease: [0.42, 0, 0.58, 1] }}>
                {filteredProjects.map((project: any, index: number) => {
                    return (
                        <div className={styles.projectsPageCo__items} onClick={() => handleProjectClick(index)}
                            onMouseEnter={() => setProjectState({ ...projectState, hoveredProjectIndex: index })}
                            onMouseLeave={() => setProjectState({ ...projectState, hoveredProjectIndex: null })}
                            key={index}>
                            <div className={styles.projectsPageCo__item}>
                                <div className={styles.projectsPageCo__item__img}>
                                    <Image
                                        src={project.homePage}
                                        alt={project.title}
                                        fill
                                        loading="lazy"
                                        title={project.title}
                                        placeholder='blur'
                                        blurDataURL={project.homePage}
                                    />
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
                                                title={project.title}
                                            />
                                        )}
                                    </AnimatePresence>
                                </div>
                                <div className={styles.projectsPageCo__item__desc}>
                                    <div className={styles.projects__item_desc_combined}>
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
        </AnimatePresence>
    )
}

export default Layout;
