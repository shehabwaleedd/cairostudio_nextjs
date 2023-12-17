'use client';
import React, { useEffect, useRef, useCallback, useState } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../../../firebase.config';
import { Project, ProjectsDetailsProps, Section, Item } from '@/common/types';
import "./Details.scss"
import Loading from '@/utils/loading/Loading';
import Stairs from "../../../components/transition/Stairs"
import Head from 'next/head';

const ProjectsDetails: React.FC<ProjectsDetailsProps> = ({ params }) => {

    const ref = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [project, setProject] = useState<Project | null>(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const querySnapshot = await getDocs(collection(db, 'projects'));
            const projectsData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            })) as Project[];
            const project = projectsData.find((p) => p.title === params.title);
            if (!project) throw new Error('Project not found');
            setProject(project);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [params]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const renderDetails = (leftSection?: Section, rightSection?: Section) => {
        if (!leftSection || !rightSection) return null;
        return (
            <motion.div className="prdeco__final" ref={ref}>
                <div className="prdecofi__container">
                    <div className="prdecofico__left">
                        {leftSection?.options?.map((item, index) => (
                            <h2 key={`left-${index}`}>{item.text}</h2>
                        ))}
                    </div>
                    <div className="prdecofico__right">
                        {rightSection?.options?.map((item, index) => (
                            <div className="prdecofico__right__item" key={`right-${index}`}>
                                <p key={`p-right-${index}`}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        );
    };

    const renderImages = (items?: Item[]) => {

        return (
            <motion.div className="prdeco__collective1" >
                {items?.map((item, index) => (
                    <motion.div className="prdeco__collective1__item" key={`item-${index}`}>
                        {item.isImg ? (
                            <motion.img src={item.image} alt={`Image ${index}`} style={{ translateY }} loading="lazy" key={`image-${index}`} />
                        ) : (
                            <motion.video src={item.image} autoPlay loop muted playsInline title={`Video ${index}`} style={{ translateY }} key={`video-${index}`} />
                        )}
                    </motion.div>
                ))}
            </motion.div>
        );
    }

    const { scrollYProgress } = useScroll({
        target: imgRef,
        offset: ["start end", "end end"]
    });
    const translateY = useTransform(
        scrollYProgress,
        [0, 1],
        ["40%", "-40%"]
    );


    if (loading) return <Loading height={100} />;
    if (error) return <p style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", fontSize: "2rem", color: "var(--accent-color)" }}>Error: {error}</p>;
    if (!project) return <p>NOT FOUND</p>


    return (
        <>
            <Head>
                
            </Head> 
            <Stairs>
                <motion.main className='projectsDetails' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }} transition={{ duration: 0.4, damping: 12, stiffness: 100, ease: [0.42, 0, 0.58, 1] }}>
                    <h1>{project.title}</h1>
                    <div className="pd__titleDetails">
                        <div className="titleDetails__upper">
                            <span>00{project.title === "Lemkus" ? "1" : project.title === "Swag" ? "2" : "3"}</span>
                            <div className='line'></div>
                            <span>003</span>
                        </div>
                        <div className="titleDetails__categories">
                            <div className="titleDetails__categories_spans">
                                {project.categories.map((category, index) => {
                                    return (
                                        <motion.h3 key={`category-${index}`}>
                                            {category}
                                        </motion.h3>
                                    )
                                }
                                )}
                            </div>
                        </div>
                        <span>{project.date}</span>
                    </div>
                    <motion.div className="projectsDetails__container" ref={imgRef}>
                        <motion.div className="pd__details">
                            <motion.img src={project.cover} alt={project.title} style={{ translateY }} loading="lazy" />
                        </motion.div>
                        <div className="prdeco__subtitle">
                            <h3>
                                {project.introduction}
                            </h3>
                        </div>
                        <div className="prdeco__challsolu">
                            <div className="prdeco__link">
                                <a href={project.link} target='_blank' rel="noreferrer">
                                    Visit
                                </a>
                            </div>
                            <div className="challenge__solution_combined">
                                <div className="prdeco__challenge">
                                    <h2>
                                        Challenges
                                    </h2>
                                    <span>
                                        {project.challenge}
                                    </span>
                                </div>
                                <div className="prdeco__solution">
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
                        {project.projectsDetails.sections.find(item => item.name === 'userExpLeft')?.items && renderDetails(
                            project.projectsDetails.sections.find(item => item.name === 'userExpLeft'),
                            project.projectsDetails.sections.find(item => item.name === 'userExpRight')
                        )}

                        {project.collectiveItems && project.collectiveItems.filter(item => item.type === 'userExpImage').map((item, index) => renderImages(item.items))}
                        <div className="spacer" style={{ height: "10vh" }}></div>
                        <div className="pr__designSystem">
                            <h3>{project.introduction2}</h3>
                            <div className="pr__designSystem__container">
                                <div className="prdesignCo__left">
                                    <h2>Design System</h2>
                                    <div className="prdele__spans">
                                        {project.projectsDetails?.sections?.find(item => item.name === 'designSystemText')?.options?.map((item, index) => (
                                            <div className="prdesignCo__left__item" key={`designSystemText-${index}`}>
                                                <p key={`p-designSystemText-${index}`}>
                                                    {item.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="predesignCo__right">
                                    <div className="prederi__container">
                                        {project.collectiveItems.find(item => item.type === 'designSystem')?.items.map((item, index) => {
                                            return (
                                                <div className="prederi__item" key={`designSystem-${index}`}>
                                                    {item.isImg ? (
                                                        <motion.img src={item.image} alt={project.title} style={{ translateY }} loading="lazy" key={`designSystemImage-${index}`} />
                                                    ) : (
                                                        <motion.video src={item.image} autoPlay loop muted playsInline title={project.title} style={{ translateY }} key={`designSystemVideo-${index}`} />
                                                    )}
                                                </div>
                                            )
                                        })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="spacer" style={{ height: "10vh" }}></div>
                        {project.title === "Lemkus" && <h3>{project.introduction3}</h3>}
                        {project.title === "Lemkus" && renderDetails(
                            project.projectsDetails.sections.find(item => item.name === 'section1Left'),
                            project.projectsDetails.sections.find(item => item.name === 'section1Right')
                        )}
                        {project.projectsDetails.navigationLeft && renderDetails(
                            project.projectsDetails.sections.find(item => item.name === 'navigationLeft'),
                            project.projectsDetails.sections.find(item => item.name === 'navigationRight')
                        )}
                        {project.collectiveItems.find(item => item.type === 'collective1')?.items && renderImages(project.collectiveItems.find(item => item.type === 'collective1')?.items)}
                        {(project.title === "Tiger" || project.title === "Swag") && <h3>{project.introduction3}</h3>}

                        <div className="prdeco__collectiveGrid">
                            {project.collectiveItems.find(item => item.type === 'collectiveGrid')?.items.map((item, index) => {
                                return (
                                    <div className="prdeco__collectiveGrid__item" key={`collectiveGrid-${index}`}>
                                        {item.isImg ? (
                                            <motion.img src={item.image} alt={project.title} style={{ translateY }} loading="lazy" key={`collectiveGridImage-${index}`} />
                                        ) : (
                                            <motion.video src={item.image} autoPlay loop muted playsInline title={project.title} style={{ translateY }} key={`collectiveGridVideo-${index}`} />
                                        )}
                                    </div>
                                )
                            }
                            )}
                        </div>
                        <div className="prdecto__collectiveDraggable" style={{ flexDirection: project.title === "Lemkus" ? "column" : "row" }}>
                            {project.collectiveItems.find(item => item.type === 'collectiveDraggable')?.items.map((item, index) => {
                                return (
                                    <div className="prdecto__collectiveDraggable__item" key={`collectiveDraggable-${index}`}>
                                        {item.isImg ? (
                                            <motion.img src={item.image} alt={project.title} style={{ translateY }} loading="lazy" key={`collectiveDraggableImage-${index}`} />
                                        ) : (
                                            <motion.video src={item.image} autoPlay loop muted playsInline title={project.title} style={{ translateY }} key={`collectiveDraggableVideo-${index}`} />
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                        {project.projectsDetails.sections.find(item => item.name === 'filteringLeft') && renderDetails(
                            project.projectsDetails.sections.find(item => item.name === 'filteringLeft'),
                            project.projectsDetails.sections.find(item => item.name === 'filteringRight')
                        )}
                        {project.collectiveItems.find(item => item.type === 'filterImage')?.items && renderImages(project.collectiveItems.find(item => item.type === 'filterImage')?.items)}
                        {project.projectsDetails.sections.find(item => item.name === 'interactionLeft') && renderDetails(
                            project.projectsDetails.sections.find(item => item.name === 'interactionLeft'),
                            project.projectsDetails.sections.find(item => item.name === 'interactionRight')
                        )}
                        {project.collectiveItems.find(item => item.type === 'interactionVideo')?.items && renderImages(project.collectiveItems.find(item => item.type === 'interactionVideo')?.items)}
                        {project.collectiveItems.find(item => item.type === 'collective2') && renderImages(project.collectiveItems.find(item => item.type === 'collective2')?.items)}
                        <div className="prdeco__scope" >
                            <div className="prdecoso__left">
                                <h2>Scope Of Work</h2>
                            </div>
                            <div className="prdecoso__right">
                                {project.projectsDetails.scopeOfWork.map((scopeItem, index) => (
                                    <div className="prdecoso__right__item" key={`scopeItem-${index}`}>
                                        <h2 key={`scopeItem-${index}`}>{scopeItem.title}</h2>
                                        <div>
                                            {scopeItem.options?.map((option, idx) => (
                                                <ul className="prdecoso__right__item__item" key={`scopeItem-${index}-option-${idx}`}>
                                                    <li key={`scopeItem-${index}-option-${idx}`}>
                                                        {option.name}
                                                    </li>
                                                </ul>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.main >
            </Stairs>
        </>
    )
}

export default ProjectsDetails