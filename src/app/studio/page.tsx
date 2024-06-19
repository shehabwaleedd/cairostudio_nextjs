import React from 'react';
import styles from "./page.module.scss";
import ServicesSplit from '@/components/servicesSplit';
import Header from './aboutComponents/Header';
import { Metadata } from 'next';
import Team from './aboutComponents/Team';
import ServicesList from '@/components/ServicesList';
import Upper from '@/components/upper';
import Data from './Data';

export function generateMetadata(): Metadata {
    const url = "https://cairo-studio.com/studio";
    const baseTitle = "About Us | Cairo Studio";
    const baseDescription = "Cairo Studio is a leading digital agency in Egypt, specializing in web development, UI/UX design, and graphic design. We create unique and immersive digital experiences that translate brands into the digital world.";

    return {
        title: baseTitle,
        description: baseDescription,
        keywords: "digital agency, web development, UI/UX design, graphic design, branding, e-commerce, استوديو القاهرة, انشاء مواقع, تصميم واجهة المستخدم, تصميم الجرافيك",
        openGraph: {
            type: 'website',
            url,
            title: baseTitle,
            description: baseDescription,
            images: [
                {
                    url: "https://res.cloudinary.com/ds20vy7zo/image/upload/v1717807369/HIM_BRAND_GUIIEDLINE_V02_bmtql4.webp",
                    width: 800,
                    height: 600,
                    alt: "Cairo Studio"
                }
            ]
        },
        twitter: {
            site: "@cairostudio",
            card: "summary_large_image",
            title: baseTitle,
            description: baseDescription,
            images: "https://res.cloudinary.com/ds20vy7zo/image/upload/v1717807369/HIM_BRAND_GUIIEDLINE_V02_bmtql4.webp"
        },
        alternates: {
            canonical: url
        }
    };
}

const About: React.FC = () => {
    return (
        <>
            <main className={styles.about}>
                <h1 style={{display: "none"}}>
                    Cairo Studio: Egypt&apos;s Experts in Websites, UI/UX & Graphic Design
                </h1>
                <Header />
                <Upper p1="What we offer" p2='01' />
                <ServicesSplit data={Data} />
                <Upper p1="Team" p2='02' />
                <Team />
            </main>
            <ServicesList p2={"03"} />
        </>
    );
}

export default About;
