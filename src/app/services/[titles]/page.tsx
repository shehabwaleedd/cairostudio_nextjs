'use client'
import React, { useEffect, useRef, useMemo } from 'react'
import Data from '../Data';
import './ServicesSections.scss';
import Link from 'next/link';
import WorkedWith from '../../../components/workedWith/WorkedWith';
import { motion, useTransform, useScroll } from 'framer-motion';
import RelatedWork from '../../../components/relatedWork/RelatedWork';
import { Service } from '@/common/types';
import Image from 'next/image';
import Stairs from "../../../components/animations/transition/Stairs"
import Head from 'next/head';


interface ServicesSectionsProps {
    params: { titles: string }
}

const ServicesSections: React.FC<ServicesSectionsProps> = ({ params }) => {

    const foundService: Service | undefined = useMemo(() => {
        return Data.find((service) => service.serviceTitle.toLowerCase() === params.titles.toLowerCase());
    }, [params.titles]);


    const imgRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: imgRef,
        offset: ["start end", "end end"]
    });
    const heading = "Related Work"
    const translateY = useTransform(
        scrollYProgress,
        [0, 1],
        ["20%", "-20%"]
    );

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    if (!foundService) {
        return null;
    }
    return (
        <>
            <Head>
                <title>{foundService.serviceTitle} | Cairo Studio</title>
                <meta name="description" content={foundService.upperDescription} />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://cairo-studio.com" />
                <meta property="twitter:title" content={foundService.serviceTitle} />
                <meta property="twitter:description" content={foundService.upperDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://cairo-studio.com" />
                <meta property="og:title" content={foundService.serviceTitle} />
                <meta property="og:description" content={foundService.upperDescription} />
            </Head>
            <Stairs>
                <main className='servicesSections'>
                    <h1>{foundService.serviceTitle}</h1>
                    <section className='services__container_upper'>
                        <p>{foundService.underTitle[0]} <br /> {foundService.underTitle[1]}</p>
                        <div className="servicesSpans">
                            <h2>{foundService.upperDescription}</h2>
                            {foundService.serviceDescription.map((service, index) => {
                                return (
                                    <p key={index}>{service}</p>
                                )
                            })}
                        </div>
                    </section>
                    <div className="servicesMedia">
                        <motion.div className="servicesMedia__left" style={{ translateY }}>
                            <Image src={foundService.image.src} alt={`${foundService.serviceTitle}`} />
                        </motion.div>
                    </div>
                    <div className="services__bottom">
                        <div className="services__bottom_container">
                            <div className="seboco__left">
                                <div className="services__bottom_container_left">
                                    <h2>Services </h2>
                                    <p>{foundService.services[0].description}</p>
                                </div>
                                <Link href="/contact">
                                    <h3>Get Quote</h3>
                                </Link>
                            </div>
                            <div className="seboco__right">
                                <div className="services__bottom_container_right">
                                    {foundService.services[0]?.content.map(({ title, options }, index) => (
                                        <div key={index} className="services__bottom_container_right_section">
                                            <div className="upper">
                                                <h2>{title}</h2>
                                            </div>
                                            <div className="lower">
                                                {options.map((option, index) => (
                                                    <p key={index}>{option}</p>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services__bottom">
                        <div className="services__bottom_container">
                            <div className="seboco__left">
                                <div className="services__bottom_container_left">
                                    <h2>Process </h2>
                                    <p>{foundService.process[0].description}</p>
                                </div>
                            </div>
                            <div className="seboco__right">
                                <WorkedWith Data={foundService.process[0].content} />
                            </div>
                        </div>
                    </div>
                </main>
                <div className="services__related">
                    <h2>Related Services</h2>
                    <div className="services__related_container">
                        <RelatedWork relatedNames={foundService.relatedNames} heading={heading} />
                    </div>
                </div>
            </Stairs>
        </>
    )
}

export default ServicesSections