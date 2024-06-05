import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/common/types';
import "../List.scss";
import InsideSlider from '../insideSlider';
import FullScreenOverlay from '../fullScreenOverlay';

interface ListProps {
    filteredProjects: Project[];
    handleProjectClick: (index: number) => void;
}

const List: React.FC<ListProps> = ({ filteredProjects }) => {
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
        <div className="projectsPage__list">
            {filteredProjects.map((project, index) => (
                <motion.div className="projectsPage__list__container" key={index}>
                    <div
                        className={`projectsPage__list__item ${activeAccordion === index ? `open` : ''}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        <div className="projectsPage__list__item__container__desc">
                            <div className="projectsPage__list__item_title">
                                <h3>{project.title}</h3>
                            </div>
                            <div className="projectsPage__list_right">
                                <div className="projectsPage__list__item_categories">
                                    <p>{project.categories.join(" - ")}</p>
                                </div>
                                <div className="projectsPage__list__item__container__desc__combined">
                                    <p>{project.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AnimatePresence mode='wait'>
                        {activeAccordion === index && (
                            <motion.div
                                className="panel open"
                                variants={panelVariants}
                                initial="hidden"
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
