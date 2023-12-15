'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import ServicesData from './ServiceData'
import awwwardslogo from '../../../public/assets/awwwardswhite.png'
import cssdesignawardslogo from "../../../public/assets/css-design-awards-logos-iduloMMvGF.png"
import thefwa from "../../../public/assets/fwa-logo-C34FEDAC2B-seeklogo.com.png"
import Image from 'next/image';
import Link from 'next/link';
import useFetchProjects from '../../components/useFetchProjects/useFetchProjects';
import Loading from '../../utils/loading/Loading';
import { Project } from '@/common/types';
import { useRouter } from 'next/navigation';
import './Services.scss';




const Services: React.FC = () => {
    const { projects, loading, error } = useFetchProjects();

    const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number | null>(null);
    const [hoveredLearnMoreIndex, setHoveredLearnMoreIndex] = useState<number | null>(null);

    const relatedNames = ['Lemkus', 'Banyana', 'Block Lords'];


    const displayedProjects = projects.filter((project: Project) => relatedNames.includes(project.title));

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const router = useRouter();

    const handleProjectClick = (title: string) => {
        router.push(`/services/${title}`);
    }

    if (loading) {
        return <Loading height={100} />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            <main className='services'>
                <h1> TRANSFORMING IDEAS INTO <br /> DIGITAL EXPERIENCES </h1>
                <section className='services__container_upper'>
                    <p>CREATIVELY DRIVEN <br /> SOLUTION ORIENTATED</p>
                    <div className="servicesSpans">
                        <span>In today&apos;s competitive market, good enough is no longer sufficient. We strive for holistic excellence in every aspect of our process. Our solutions go beyond expectations, delivering possibilities our clients didn&apos;t know existed for their brand.</span>
                        <span>Our work is conceptually rooted, strategically driven, and executed by creative minds who understand the bigger picture. We specialize in crafting brands, designing websites, and building exceptional digital experiences.</span>
                    </div>
                </section>
                <div className="services__container_lower">
                    {displayedProjects.map((item: Project, index: number) => (
                        <div className="services__container" key={index}>
                            <motion.div className="seco__left">
                                <h2>{item.serviceTitle}</h2>
                                <p>
                                    {item.serviceDescription}
                                </p>
                                <div className='navigationService' onClick={() => handleProjectClick(item.serviceTitle)}
                                    onMouseEnter={() => setHoveredLearnMoreIndex(index)}
                                    onMouseLeave={() => setHoveredLearnMoreIndex(null)}>
                                    <h3>
                                        {hoveredLearnMoreIndex === index
                                            ? `Learn More On ${item.serviceTitle}`
                                            : 'Learn More'}
                                    </h3>
                                </div>
                            </motion.div>
                            <div className="seco__right" onMouseEnter={() => setHoveredProjectIndex(index)} onMouseLeave={() => setHoveredProjectIndex(null)} >
                                <div className="seco__righ_img" style={{ backgroundImage: item.title === "Lemkus" ? `url(${item.homePage})` : `url(${item.poster})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }}>
                                    <AnimatePresence mode='wait'>
                                        {(hoveredProjectIndex === index || hoveredLearnMoreIndex === index) && (
                                            <motion.video
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                src={item.mainVideo}
                                                style={{
                                                    width: item.title === 'Lemkus' || item.title === 'Block Lords' ? '70%' : '100%',
                                                    left: item.title === 'Lemkus' || item.title === 'Block Lords' ? '15%' : '',
                                                    objectFit: item.title === 'Lemkus' || item.title === 'Block Lords' ? 'contain' : 'cover',
                                                }}
                                                loop
                                                muted
                                                autoPlay
                                                playsInline
                                            />
                                        )}
                                    </AnimatePresence>
                                </div>
                                <div className="secori__lower">
                                    <div className="secorilo__spans">
                                        <div>
                                            {item.categories.map((element, index) => (
                                                <span key={index}>
                                                    {index > 0 ? ' -  ' : ''}
                                                    {element}
                                                </span>
                                            ))}
                                        </div>
                                        <span>{item.date}</span>
                                    </div>
                                    <h2>{item.title}</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="services__bottom">
                    <div className="services__bottom_container">
                        <div className="seboco__left">
                            <div className="services__bottom_container_left">
                                <h2>SERVICES <br /> UNPACKED</h2>
                                <p>ELEVATING BRANDS WITH CUTTING-EDGE DIGITAL DESIGN AND BRANDING SOLUTIONS.</p>
                            </div>
                            <Link href="/contact">
                                <h3>Let&apos;s Talk</h3>
                            </Link>
                        </div>
                        <div className="seboco__right">
                            <div className="services__bottom_container_right">
                                {ServicesData.map((item, index) => (
                                    <div key={index} className="services__bottom_container_right_section">
                                        <h2>{item.title}</h2>
                                        {item.elements.map((element, index) => (
                                            <div key={index} className={`services__details_container`}>
                                                <p >{element.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <section className="services__awards">
                    <div className="seaw__container_upper">
                        <h2> Awards & <br /> Recognitions </h2>
                        <p> Our passion for technology drives us to excel in research, strategy, branding, UX/UI, and development. Our focus is on creating impactful experiences that bring value to our clients and their customers. While we don&apos;t chase awards, it&apos;s always gratifying to receive recognition for our work. </p>
                    </div>
                    <div className="seaw__container_lower">
                        <div className="seaw__card">
                            <Image src={awwwardslogo} alt="Awwwards Logo" height={300} width={500} placeholder="blur" />
                            <div className="seaw__card_lower">
                                <h3>13</h3>
                                <p>Awwwards</p>
                            </div>
                        </div>
                        <div className="seaw__card">
                            <Image src={cssdesignawardslogo} alt="CSS Design Awards Logo" height={300} width={500} placeholder="blur" />
                            <div className="seaw__card_lower">
                                <h3>24</h3>
                                <p>CSS DESIGN AWWWARDS</p>
                            </div>
                        </div>
                        <div className="seaw__card">
                            <Image src={thefwa} alt="The FWA Logo" height={300} width={500} placeholder="blur" />
                            <div className="seaw__card_lower">
                                <h3>02</h3>
                                <p>The FWA</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Services