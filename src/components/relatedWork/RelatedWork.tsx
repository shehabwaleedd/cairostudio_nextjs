'use client'
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useFetchProjects from '@/hooks/useFetchProjects';
import getChars from '@/animations/animatedHeaders/getChars';
import { usePathname } from 'next/navigation';
import styles from '@/app/projects/page.module.scss';
import Layout from '@/app/projects/components/Layout';
import InsideLayout from '@/app/projects/components/InsideLayout';
import List from '@/app/projects/components/list/List';
import { Project, ProjectState, RelatedWorkProps } from '@/common/types';

const RelatedWork: React.FC<RelatedWorkProps> = ({ relatedNames = [], heading }) => {
    const { projects } = useFetchProjects();
    const [menuOpened, setMenuOpened] = useState<boolean>(false);
    const router = usePathname();

    const [projectState, setProjectState] = useState<ProjectState>({
        detailsOpened: false,
        selectedProjectIndex: null,
        hoveredProjectIndex: null,
    });

    const [selectedView, setSelectedView] = useState<string>('grid');
    const isWorkRoute = router === '/projects';

    const relatedProjects = useMemo(() => {
        return projects.filter((project: Project) => relatedNames.includes(project.title));
    }, [projects, relatedNames]);

    const [filteredProjects, setFilteredProjects] = useState<Project[]>(relatedProjects);

    const categories = useMemo(() => {
        const allCategories = ['All Work+', ...relatedProjects.flatMap((project: Project) => project.categories)];
        return Array.from(new Set(allCategories.slice(0, 10)));
    }, [relatedProjects]);

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleCategoryClick = useCallback((category: string) => {
        if (category === 'All Work+') {
            setFilteredProjects(relatedProjects);
        } else {
            const projectsByCategory = relatedProjects.filter((project: Project) =>
                project.categories.includes(category)
            );
            setFilteredProjects(projectsByCategory);
        }
        setSelectedCategory(category);
        setMenuOpened(false);
    }, [relatedProjects]);

    const handleMenuClick = useCallback(() => {
        setMenuOpened(!menuOpened);
    }, [menuOpened]);

    const handleProjectClick = useCallback((index: number) => {
        const selectedProject = filteredProjects[index];
        if (selectedProject) {
            setProjectState((prevState) => ({
                ...prevState,
                detailsOpened: true,
                selectedProjectIndex: index,
            }));
        }
    }, [filteredProjects]);

    const handleDetailsClose = useCallback(() => {
        setProjectState((prevState) => ({
            ...prevState,
            selectedProjectIndex: null,
            detailsOpened: false,
        }));
    }, []);

    useEffect(() => {
        if (isWorkRoute) {
            setFilteredProjects(projects);
        } else {
            const projectsFilteredByNames = projects.filter((project: Project) => relatedNames.includes(project.title));
            setFilteredProjects(projectsFilteredByNames);
        }
    }, [isWorkRoute, projects, relatedNames]);

    return (
        <>
            <section className={styles.projectsPage}>
                <div className={styles.projectsPage_top}>
                    <div className={styles.projectsPage__heading}>
                        {getChars(heading)}
                    </div>
                    {isWorkRoute && (
                        <div className={styles.projectsPage__categories}>
                            <div className={styles.projectsPage__categories_container}>
                                <div onClick={handleMenuClick}>
                                    <h3>Filter: {selectedCategory ? selectedCategory : "All Work+"}</h3>
                                    <AnimatePresence>
                                        {menuOpened && (
                                            <motion.div
                                                key="menu"
                                                className={styles.projectsPage__categories__menu__container__content}
                                                initial={{ clipPath: 'inset(0 0 100% 0)' }}
                                                animate={{ clipPath: 'inset(0 0 0% 0)' }}
                                                exit={{ clipPath: 'inset(0 0 100% 0)' }}
                                                transition={{ duration: 0.4, ease: [0.42, 0, 0.58, 1] }}
                                                style={{ maxHeight: '50vh', overflowY: 'auto' }}
                                            >
                                                <div> 
                                                    <ul>
                                                        {categories.map((category, index) => (
                                                            <li key={index} onClick={() => handleCategoryClick(category)}>
                                                                <motion.h3
                                                                    initial={{ opacity: 0 }}
                                                                    animate={{ opacity: 1, transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] } }}
                                                                    exit={{ opacity: 0, transition: { duration: 0.2, ease: [0.42, 0, 0.58, 1] } }}
                                                                >
                                                                    {category}
                                                                </motion.h3>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                </div>
                            </div>
                            <div className={styles.projectPage__viewSelect}>
                                <div className={styles.pv__container}>
                                    <motion.button
                                        style={{ backgroundColor: selectedView === 'grid' ? 'var(--title-color)' : '', color: selectedView === 'grid' ? 'var(--background-color)' : 'var(--container-color)' }}
                                        onClick={() => setSelectedView('grid')}
                                    >
                                        Grid
                                    </motion.button>
                                    <motion.button
                                        style={{ backgroundColor: selectedView === 'list' ? 'var(--title-color)' : '', color: selectedView === 'list' ? 'var(--background-color)' : 'var(--container-color)' }}
                                        onClick={() => setSelectedView('list')}
                                    >
                                        List
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {selectedView === 'grid' ? (
                    <div className={styles.projectsPage__container}>
                        <Layout projectState={projectState} setProjectState={setProjectState} filteredProjects={filteredProjects} handleProjectClick={handleProjectClick} />
                    </div>
                ) : (
                    <List filteredProjects={filteredProjects} />
                )}
            </section>
            <InsideLayout projectState={projectState} relatedProjects={relatedProjects} handleDetailsClose={handleDetailsClose} />
        </>
    );
};

export default RelatedWork;
