import React from 'react';
import Data from '../Data';
import styles from "./page.module.scss";
import WorkedWith from '@/components/workedWith';
import RelatedWork from '@/components/relatedWork/RelatedWork';
import { Service } from '@/common/types';
import Image from 'next/image';
import { Metadata } from 'next';
import Header from './components/Header';

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
    const title = params.titles.toLowerCase();
    const service = await fetchService(title);
    const heading = "Related Work";

    if (!service) {
        return <p>Service not found.</p>;
    }

    return (
        <main className={styles.servicesSections}>
            <Header header={service.header} />
            <Image src={service.image.src} alt={service.serviceTitle} width={1920} height={1230} />

            <section className={styles.services__bottom}>
                <div className={styles.seboco__left}>
                    <h3>Services</h3>
                    <p>{service.services[0].description}</p>
                </div>
                <div className={styles.seboco__right}>
                    <div className={styles.services__bottom_container_right}>
                        {service.services[0]?.content.map(({ title, options }, index) => (
                            <div key={title + index} className={styles.services__bottom_container_right_section}>
                                <div className={styles.upper}>
                                    <h2>{title}</h2>
                                </div>
                                <div className={styles.lower}>
                                    {options.map((option, optIndex) => (
                                        <p key={option + optIndex}>{option}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className={styles.services__bottom}>
                <div className={styles.services__bottom_container}>
                    <div className={styles.seboco__left}>
                        <h3>Process</h3>
                        <p>{service.process[0].description}</p>
                    </div>
                    <WorkedWith Data={service.process[0].content} />
                </div>
            </section>
            <section className={styles.services__related}>
                <RelatedWork relatedNames={service.relatedNames} heading={heading} />
            </section>
        </main>
    );
};

export default ServicesSections;
