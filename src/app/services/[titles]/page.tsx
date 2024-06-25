import React from 'react';
import Data from '../Data';
import styles from "./page.module.scss";

import RelatedWork from '@/components/relatedWork/RelatedWork';
import { Service } from '@/common/types';
import Image from 'next/image';
import { Metadata } from 'next';
import Header from './components/Header';
import ServicesSplit from '@/components/servicesSplit';
import WorkedWith from '@/components/workedWith';

interface ServicesSectionsProps {
    params: { titles: string }
}

interface Project {
    id: number;
    headline?: HTMLHeadingElement | null;
    title: string;
    elements: { text: string }[];
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
                url: `https://cairo-studio.com/services/${title}`,
                type: 'website',
                images: [
                    {
                        url: 'https://cairo-studio.com/default-image.jpg',
                        width: 800,
                        height: 600,
                        alt: 'My Company Default Image',
                    },
                ],
            },
        };
    }

    const formattedTitle = service.serviceTitle.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const keywords = [
        service.serviceTitle,
        ...service.services[0].content.flatMap(content => content.options),
        ...service.process[0].content.map(process => process.name)
    ].join(', ');

    return {
        title: `${formattedTitle} - Cairo Studio`,
        description: service.upperDescription,
        keywords: keywords,
        openGraph: {
            title: `${formattedTitle} - Cairo Studio`,
            description: service.upperDescription,
            url: `https://cairo-studio.com/services/${title}`,
            type: 'website',
        },
        alternates: {
            canonical: `https://cairo-studio.com/services/${title}`
        }
    };
}

const ServicesSections: React.FC<ServicesSectionsProps> = async ({ params }) => {
    const title = params.titles.toLowerCase();
    const service = await fetchService(title);
    const heading = "Related Work";

    if (!service) {
        return <p>Service not found.</p>;
    }

    const transformServiceContentToProjects = (content: { title: string; options: string[]; }[]): Project[] => {
        return content.map((item, index) => ({
            id: index + 1, // Assuming id is just the index + 1 for simplicity
            title: item.title,
            elements: item.options.map(option => ({ text: option }))
        }));
    };

    const serviceContent = service.services[0].content;
    const transformedData = transformServiceContentToProjects(serviceContent);

    // Transform process data to match the required structure
    const processData = service.process[0].content.map((item, index) => ({
        id: index + 1,
        name: item.name,
        desc: item.desc
    }));

    const formattedTitle = service.serviceTitle.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
        <main className={styles.servicesSections}>
            <h1 style={{ display: "none" }}>
                {formattedTitle} - Cairo Studio
            </h1>
            <Header header={service.header} />
            <Image src={service.image.src} alt={service.serviceTitle} width={1920} height={1230} placeholder='blur' blurDataURL={service.image.src} priority={true} quality={75}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
            <section className={styles.services__bottom}>
                <ServicesSplit data={transformedData} />
            </section>
            <section className={styles.services__process}>
                <div className={styles.seboco__left}>
                    <h3>Process</h3>
                    <p>{service.process[0].description}</p>
                </div>
                <WorkedWith Data={processData} />
            </section>
            <section className={styles.services__related}>
                <RelatedWork relatedNames={service.relatedNames} heading={heading} />
            </section>
        </main>
    );
};

export default ServicesSections;
