import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Project, ProjectState } from '@/common/types';
import styles from "./insideLayout.module.scss";
import 'keen-slider/keen-slider.min.css';
import InsideSlider from './insideSlider';
import FullScreenOverlay from './fullScreenOverlay';
import { mobileVariants } from '@/animations/animate';


interface InsideLayoutProps {
    projectState: ProjectState;
    relatedProjects: Project[];
    handleDetailsClose: () => void;
}

const InsideLayout: React.FC<InsideLayoutProps> = ({ projectState, relatedProjects, handleDetailsClose }) => {
    const [selectedMedia, setSelectedMedia] = useState<{ type: string | null, src: string } | null>(null);

    const selectedProject = projectState.selectedProjectIndex !== null ? relatedProjects[projectState.selectedProjectIndex] : null;

    return (
        <>
            <AnimatePresence mode='wait'>
                {projectState.detailsOpened && selectedProject && (
                    <motion.div className={styles.projectsPageCo__details} variants={mobileVariants} initial='initial' animate='animate' exit='exit'>
                        <div className={styles.projectsPageCo__details__container__close} onClick={handleDetailsClose}>
                            <span>{selectedProject.date}</span>
                            <h3>{selectedProject.title}</h3>
                            <span>Close</span>
                        </div>
                        <div className={styles.projectsPageCo__deCo}>
                            <InsideSlider selectedProject={selectedProject} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {selectedMedia && (
                    <FullScreenOverlay selectedMedia={selectedMedia} setSelectedMedia={setSelectedMedia} />
                )}
            </AnimatePresence>
        </>
    );
};

export default InsideLayout;
