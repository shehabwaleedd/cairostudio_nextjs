import React from 'react';
import Contact from './Contact';
import { Metadata } from 'next';

export function generateMetadata(): Metadata {
    const url = "https://cairo-studio.com/contact";
    const baseTitle = "Contact Us | Cairo Studio";
    const baseDescription = "Get in touch with Cairo Studio, your go-to digital agency for web development, UI/UX design, and graphic design. We're here to help you create unique digital experiences.";

    return {
        title: baseTitle,
        description: baseDescription,
        keywords: "contact, Cairo Studio, digital agency, web development, UI/UX design, graphic design, استوديو القاهرة, وكالة رقمية, تطوير الويب, تصميم واجهة المستخدم, تصميم الجرافيك",
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
                    alt: "Cairo Studio Contact"
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

const page = () => {
    return (
        <main>
            <Contact />
        </main>
    );
}

export default page;
