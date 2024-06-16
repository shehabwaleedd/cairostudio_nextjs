
import React from 'react'
import styles from "./page.module.scss"
import ServicesSplit from '@/components/servicesSplit'
import Header from './aboutComponents/Header'
import { Metadata } from 'next'
import Team from './aboutComponents/Team'
import ServicesList from '@/components/ServicesList'
import Upper from '@/components/upper';
import Data from './Data'
export function generateMetadata(): Metadata {
    const url = "https://www.cairos-tudio.com/studio"
    return {
        title: "About Us | Cairo Studio",
        description: "Cairo Studio is a digital agency that specializes in translating brands into unique immersive digital experiences.",
        keywords: "digital agency, web development, branding, graphic design, e-commerce",
        openGraph: {
            type: 'website',
            url,
            title: "About Us | Cairo Studio",
            description: "Cairo Studio is a digital agency that specializes in translating brands into unique immersive digital experiences.",
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
            title: "About Us | Cairo Studio",
            description: "Cairo Studio is a digital agency that specializes in translating brands into unique immersive digital experiences.",
            images: "https://res.cloudinary.com/ds20vy7zo/image/upload/v1717807369/HIM_BRAND_GUIIEDLINE_V02_bmtql4.webp"
        }

    }
}

const About: React.FC = () => {

    return (
        <>
            <main className={styles.about}>
                <Header />
                <Upper p1="What we offer" p2='01' />
                <ServicesSplit data={Data} />
                <Upper p1="Team" p2='02' />
                <Team />
            </main>
            <ServicesList p2={"03"} />
        </>
    )
}

export default About