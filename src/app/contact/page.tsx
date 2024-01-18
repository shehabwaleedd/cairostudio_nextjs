import React from 'react'
import Contact from './Contact'
import { Metadata } from '@/common/types'

export const metadata: Metadata = {
    title: 'Contact Us | Cairo Studio',
    description: 'Get in touch with Cairo Studio. We are always happy to hear from you. Send us your inquiries and we will get back to you as soon as possible.',
    metadataBase: new URL('https://cairo-studio.com'),
    keywords: [
        'UI/UX Design',
        'Web Development',
        'Brand Identity',
        'Digital Design',
        'Cairo Studio',
        'Cairo',
        'Egypt',
        'UI',
        'UX',
        'Design',
        'Web',
        'Development',
        'Brand',
        'Identity',
        'Digital',
        'Design',
        'Cairo Studio',
        'Cairo',
        'Egypt',
    ],
    referrer: 'origin-when-cross-origin',
    robots: 'index, follow',
    canonical: 'https://www.cairo-studio.com',
    googlebot: 'index, follow', 

    openGraph: {
        title: 'Contact Us | Cairo Studio',
        description: 'Get in touch with Cairo Studio. We are always happy to hear from you. Send us your inquiries and we will get back to you as soon as possible.',
        image: 'URL_TO_YOUR_IMAGE',
        site_name: 'Cairo Studio',
        type: 'website',
        locale: "en_US",
        url: 'https://www.cairo-studio.com',
        images: [
            {
                url: 'https://www.cairo-studio.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Contact Us | Cairo Studio',
            },
        ]
    },
    twitter: {
        card: 'summary_large_image',
        site: '@cairostudio',
        creator: '@cairostudio',
        title: 'Contact Us | Cairo Studio',
        description: 'Get in touch with Cairo Studio. We are always happy to hear from you. Send us your inquiries and we will get back to you as soon as possible.',
        image: 'https://www.cairo-studio.com/og-image.png',
        url: 'https://www.cairo-studio.com/',

    },

    icons: {
        favicon: '/favicon.ico',
        appleTouchIcon: '/apple-touch-icon.png',
        androidChrome: '/android-chrome-192x192.png',
        msTileImage: '/mstile-150x150.png',
    },

};



const page = () => {
    return (
        <main>
            <Contact />
        </main>
    )
}

export default page