import { Metadata } from '@/common/types';

// Base metadata
const baseMetadata: Metadata = {
    title: 'Cairo Studio | Leading in UI/UX & Web Development',
    description: 'Elevating digital experiences with Cairo Studio. Specialized in innovative UI/UX design, responsive web development, and unique brand identity solutions. Visit us for cutting-edge, user-centric digital designs that blend functionality with visual appeal.',
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
    googlebot: 'index, follow',
    canonical: 'https://www.cairo-studio.com',
    openGraph: {
        title: 'Cairo Studio | UI/UX Design, Web Development & Brand Identity',
        description: 'Cairo Studio is a leading digital design agency specializing in UI/UX design, responsive web development, and unique brand identity solutions. We create user-centric, innovative digital experiences that blend functionality with visual appeal. Elevate your brand with Cairo Studio.',
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
                alt: 'Cairo Studio | UI/UX Design, Web Development & Brand Identity',
            },
        ]
    },
    // Twitter
    twitter: {
        card: 'summary_large_image',
        site: '@cairostudio',
        creator: '@cairostudio',
        title: 'Cairo Studio | UI/UX Design, Web Development & Brand Identity',
        description: 'Cairo Studio is a leading digital design agency specializing in UI/UX design, responsive web development, and unique brand identity solutions. We create user-centric, innovative digital experiences that blend functionality with visual appeal. Elevate your brand with Cairo Studio.',
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

export const useMetadata = (pageMetadata: Partial<Metadata>) => {
    return { ...baseMetadata, ...pageMetadata };
};
