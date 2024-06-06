import React from 'react';
import Data from '../Data';
import styles from "./page.module.scss";
import Link from 'next/link';
import WorkedWith from '@/components/workedWith';
import RelatedWork from '@/components/relatedWork/RelatedWork';
import { Service } from '@/common/types';
import Image from 'next/image';
import { Metadata } from 'next';

interface ServicesSectionsProps {
    params: { titles: string }
}

async function fetchService(title: string): Promise<Service | null> {
    const service = Data.find((service) => service.serviceTitle.toLowerCase() === title.toLowerCase()) || null;
    return service;
}

export async function generateMetadata({ params }: { params: { titles: string } }): Promise<Metadata> {
    const title = params.titles.toLowerCase();
    const service = await fetchService(title);

    if (!service) {
        return {
            title: 'Service Not Found - Cairo Studio',
            description: 'The service you are looking for does not exist.',
            openGraph: {
                title: 'Service Not Found - Cairo Studio',
                description: 'The service you are looking for does not exist.',
                url: `https://www.cairo-studio.com/services/${title}`,
                type: 'website',
                images: [
                    {
                        url: 'https://www.cairo-studio.com/default-image.jpg',
                        width: 800,
                        height: 600,
                        alt: 'My Company Default Image',
                    },
                ],
            },
        };
    }

    return {
        title: `${service.serviceTitle.toUpperCase()} - Cairo Studio`,
        description: service.upperDescription,
        openGraph: {
            title: `${service.serviceTitle} - Cairo Studio`,
            description: service.upperDescription,
            url: `https://www.cairo-studio.com/services/${title}`,
            type: 'website',
        },
    };
}

const ServicesSections: React.FC<ServicesSectionsProps> = async ({ params }) => {
    const service = await fetchService(params.titles);

    const heading = "Related Work";

    if (!service) {
        return <p>Service not found.</p>;
    }

    return (
        <>
            <main className={styles.servicesSections}>
                <header>
                    <h1>{service.serviceTitle}</h1>
                </header>
                <section className={styles.services__container_upper}>
                    <p>{service.underTitle[0]} <br /> {service.underTitle[1]}</p>
                    <div className={styles.servicesSpans}>
                        <h2>{service.upperDescription}</h2>
                        {service.serviceDescription.map((desc, index) => (
                            <p key={index}>{desc}</p>
                        ))}
                    </div>
                </section>
                <section className={styles.servicesMedia}>
                    <Image src={service.image.src} alt={service.serviceTitle} width={800} height={600} />
                </section>
                <section className={styles.services__bottom}>
                    <div className={styles.services__bottom_container}>
                        <div className={styles.seboco__left}>
                            <h2>Services</h2>
                            <p>{service.services[0].description}</p>
                            <Link href="/contact">
                                <h3>Get Quote</h3>
                            </Link>
                        </div>
                        <div className={styles.seboco__right}>
                            <div className={styles.services__bottom_container_right}>
                                {service.services[0]?.content.map(({ title, options }, index) => (
                                    <div key={index} className={styles.services__bottom_container_right_section}>
                                        <div className={styles.upper}>
                                            <h2>{title}</h2>
                                        </div>
                                        <div className={styles.lower}>
                                            {options.map((option, optIndex) => (
                                                <p key={optIndex}>{option}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.services__bottom}>
                    <div className={styles.services__bottom_container}>
                        <div className={styles.seboco__left}>
                            <h2>Process</h2>
                            <p>{service.process[0].description}</p>
                        </div>
                        <div className={styles.seboco__right}>
                            <WorkedWith Data={service.process[0].content} />
                        </div>
                    </div>
                </section>
                <section className={styles.services__related}>
                    <RelatedWork relatedNames={service.relatedNames} heading={heading} />
                </section>
            </main>
        </>
    );
};

export default ServicesSections;
