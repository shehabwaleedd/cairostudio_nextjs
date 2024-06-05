import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/common/types';
import styles from "@/app/work/components/list.module.scss";
import InsideSlider from '../insideSlider';
import FullScreenOverlay from '../fullScreenOverlay';

interface ListProps {
    filteredProjects: Project[];
    handleProjectClick: (index: number) => void;
}

const List: React.FC<ListProps> = ({ filteredProjects, handleProjectClick }) => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
    const [selectedMedia, setSelectedMedia] = useState<{ type: string | null, src: string } | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const panelVariants = {
        hidden: { height: 0 },
        visible: { height: '30vh' },
        exit: { height: 0 }
    };


    const handleMediaClick = (type: string, src: string) => {
        setSelectedMedia({ type, src });
    };


    return (
        <div className={styles.projectsPage__list}>
            {filteredProjects.map((project, index) => (
                <motion.div className={styles.projectsPage__list__container} key={index}>
                    <div
                        className={`${styles.projectsPage__list__item} ${activeAccordion === index ? `${styles.open}` : ''}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <div className={styles.projectsPage__list__item__container__desc}>
                            <div className={styles.projectsPage__list__item_title}>
                                <h3>{project.title}</h3>
                            </div>
                            <div className={styles.projectsPage__list_right}>
                                <div className={styles.projectsPage__list__item_categories}>
                                    <p>{project.categories.join(" - ")}</p>
                                </div>
                                <div className={styles.projectsPage__list__item__container__desc__combined}>
                                    <p>{project.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AnimatePresence mode='wait'>
                        {activeAccordion === index && (
                            <motion.div
                                className={`${styles.panel} ${styles.open}`}
                                variants={panelVariants}
                                initial="hidden"
                                layout
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 1, ease: [0.04, 0.62, 0.23, 0.98] }}
                            >
                                <InsideSlider selectedProject={project} handleMediaClick={handleMediaClick} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
            <AnimatePresence>
                {selectedMedia && (
                    <FullScreenOverlay selectedMedia={selectedMedia} setSelectedMedia={setSelectedMedia} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default List;
