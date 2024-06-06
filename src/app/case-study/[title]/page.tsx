'use client';
import React, { useEffect, useRef, useCallback, useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../../../firebase.config';
import styles from "./page.module.scss";
import { Project } from '@/common/types';
import RenderDetails from './RenderDetails';
import RenderImages from './RenderImages';
import ScopeOfWork from './ScopeOfWork';

const ProjectsDetails = ({ params }: { params: { title: string; } }) => {
    const ref = useRef(null);
    const imgRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [project, setProject] = useState<Project | null>(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const querySnapshot = await getDocs(collection(db, 'projects'));
            const projectsData = querySnapshot.docs.map((doc) => ({
                ...(doc.data() as Project),
                id: doc.id,
            })) as Project[];
            const project = projectsData.find((p) => p.title === params.title);
            if (!project) throw new Error('Project not found');
            setProject(project);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    }, [params]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const { scrollYProgress } = useScroll({
        target: imgRef,
        offset: ["start end", "end end"]
    });
    const translateY = useTransform(
        scrollYProgress,
        [0, 1],
        ["40%", "-40%"]
    );

    if (loading) return <div>LOADING</div>;
    if (error) return <p className={styles.error}>Error: {error}</p>;
    if (!project) return <p>NOT FOUND</p>;

    return (
        <motion.main className={styles.projectsDetails} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }} transition={{ duration: 0.4, damping: 12, stiffness: 100, ease: [0.42, 0, 0.58, 1] }}>
            <h1>{project.title}</h1>
            <div className={styles.pd__titleDetails}>
                <div className={styles.titleDetails__upper}>
                    <span>00{project.title === "Lemkus" ? "1" : project.title === "Swag" ? "2" : "3"}</span>
                    <div className={styles.line}></div>
                    <span>003</span>
                </div>
                <div className={styles.titleDetails__categories}>
                    <div className={styles.titleDetails__categories_spans}>
                        {project.categories.map((category, index) => (
                            <motion.h3 key={`category-${index}`}>
                                {category}
                            </motion.h3>
                        ))}
                    </div>
                </div>
                <span>{project.date}</span>
            </div>
            <motion.div className={styles.projectsDetails__container} ref={imgRef}>
                <motion.div className={styles.pd__details}>
                    <motion.img src={project.cover} alt={project.title} style={{ translateY }} loading="lazy" />
                </motion.div>
                <div className={styles.prdeco__subtitle}>
                    <h3>
                        {project.introduction}
                    </h3>
                </div>
                <div className={styles.prdeco__challsolu}>
                    <div className={styles.prdeco__link}>
                        <a href={project.link} target='_blank' rel="noreferrer">
                            Visit
                        </a>
                    </div>
                    <div className={styles.challenge__solution_combined}>
                        <div className={styles.prdeco__challenge}>
                            <h2>
                                Challenges
                            </h2>
                            <span>
                                {project.challenge}
                            </span>
                        </div>
                        <div className={styles.prdeco__solution}>
                            <h2>
                                Solution
                            </h2>
                            <span>
                                {project.solution}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="spacer" style={{ height: "10vh" }}></div>
                <video src={project.mainVideo} autoPlay loop muted playsInline title={project.title} />
                {project.projectsDetails.sections.find(item => item.name === 'userExpLeft')?.options && <RenderDetails
                    leftSection={project.projectsDetails.sections.find(item => item.name === 'userExpLeft')}
                    rightSection={project.projectsDetails.sections.find(item => item.name === 'userExpRight')}
                />}
                {project.collectiveItems.filter(item => item.type === 'userExpImage').map((item, index) => <RenderImages key={index} items={item.items} translateY={translateY} />)}
                <div className={styles.spacer} style={{ height: "10vh" }}></div>
                <div className={styles.pr__designSystem}>
                    <h3>{project.introduction2}</h3>
                    <div className={styles.pr__designSystem__container}>
                        <div className={styles.prdesignCo__left}>
                            <h2>Design System</h2>
                            <div className={styles.prdele__spans}>
                                {project.projectsDetails?.sections?.find(item => item.name === 'designSystemText')?.options?.map((item, index) => (
                                    <div className={styles.prdesignCo__left__item} key={`designSystemText-${index}`}>
                                        <p key={`p-designSystemText-${index}`}>
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.predesignCo__right}>
                            <div className={styles.prederi__container}>
                                {project.collectiveItems.find(item => item.type === 'designSystem')?.items.map((item, index) => (
                                    <div className={styles.prederi__item} key={`designSystem-${index}`}>
                                        {item.isImg ? (
                                            <motion.img src={item.image} alt={project.title} style={{ translateY }} loading="lazy" key={`designSystemImage-${index}`} />
                                        ) : (
                                            <motion.video src={item.image} autoPlay loop muted playsInline title={project.title} style={{ translateY }} key={`designSystemVideo-${index}`} />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer" style={{ height: "10vh" }}></div>
                {project.title === "Lemkus" && <h3>{project.introduction3}</h3>}
                {project.title === "Lemkus" && <RenderDetails
                    leftSection={project.projectsDetails.sections.find(item => item.name === 'section1Left')}
                    rightSection={project.projectsDetails.sections.find(item => item.name === 'section1Right')}
                />}
                {project.projectsDetails.navigationLeft && <RenderDetails
                    leftSection={project.projectsDetails.sections.find(item => item.name === 'navigationLeft')}
                    rightSection={project.projectsDetails.sections.find(item => item.name === 'navigationRight')}
                />}
                {project.collectiveItems.find(item => item.type === 'collective1')?.items && <RenderImages items={project.collectiveItems.find(item => item.type === 'collective1')?.items} translateY={translateY} />}
                {(project.title === "Tiger" || project.title === "Swag") && <h3>{project.introduction3}</h3>}
                <div className={styles.prdeco__collectiveGrid}>
                    {project.collectiveItems.find(item => item.type === 'collectiveGrid')?.items.map((item, index) => (
                        <div className={styles.prdeco__collectiveGrid__item} key={`collectiveGrid-${index}`}>
                            {item.isImg ? (
                                <motion.img src={item.image} alt={project.title} style={{ translateY }} loading="lazy" key={`collectiveGridImage-${index}`} />
                            ) : (
                                <motion.video src={item.image} autoPlay loop muted playsInline title={project.title} style={{ translateY }} key={`collectiveGridVideo-${index}`} />
                            )}
                        </div>
                    ))}
                </div>
                <div className={styles.prdecto__collectiveDraggable} style={{ flexDirection: project.title === "Lemkus" ? "column" : "row" }}>
                    {project.collectiveItems.find(item => item.type === 'collectiveDraggable')?.items.map((item, index) => (
                        <div className={styles.prdecto__collectiveDraggable__item} key={`collectiveDraggable-${index}`}>
                            {item.isImg ? (
                                <motion.img src={item.image} alt={project.title} style={{ translateY }} loading="lazy" key={`collectiveDraggableImage-${index}`} />
                            ) : (
                                <motion.video src={item.image} autoPlay loop muted playsInline title={project.title} style={{ translateY }} key={`collectiveDraggableVideo-${index}`} />
                            )}
                        </div>
                    ))}
                </div>
                {project.projectsDetails.sections.find(item => item.name === 'filteringLeft') && <RenderDetails
                    leftSection={project.projectsDetails.sections.find(item => item.name === 'filteringLeft')}
                    rightSection={project.projectsDetails.sections.find(item => item.name === 'filteringRight')}
                />}
                {project.collectiveItems.find(item => item.type === 'filterImage')?.items && <RenderImages items={project.collectiveItems.find(item => item.type === 'filterImage')?.items} translateY={translateY} />}
                {project.projectsDetails.sections.find(item => item.name === 'interactionLeft') && <RenderDetails
                    leftSection={project.projectsDetails.sections.find(item => item.name === 'interactionLeft')}
                    rightSection={project.projectsDetails.sections.find(item => item.name === 'interactionRight')}
                />}
                {project.collectiveItems.find(item => item.type === 'interactionVideo')?.items && <RenderImages items={project.collectiveItems.find(item => item.type === 'interactionVideo')?.items} translateY={translateY} />}
                {project.collectiveItems.find(item => item.type === 'collective2') && <RenderImages items={project.collectiveItems.find(item => item.type === 'collective2')?.items} translateY={translateY} />}
                <ScopeOfWork scopeOfWork={project.projectsDetails.scopeOfWork} />
            </motion.div>
        </motion.main>
    );
};

export default ProjectsDetails;
