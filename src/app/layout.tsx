import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '../components/navbar';
import './globals.css';
import { Metadata } from 'next';
import { UserContextProvider } from '../context/authContext/AuthContext';
import { ThemeProvider } from '@/context/ThemeProvider';
import SmoothScrolling from '@/animations/SmoothScrolling';
import { Toaster } from 'sonner';
import Script from 'next/script';
const FooterWithNoSSR = dynamic(() => import('../components/footer'));

export const metadata: Metadata = {
  title: 'Cairo Studio | Leading in UI/UX & Web Development in Egypt',
  description: 'Cairo Studio elevates digital experiences through innovative UI/UX design, responsive web development, and unique brand identity solutions in Egypt. Visit us for cutting-edge, user-centric digital designs that blend functionality with visual appeal.',
  metadataBase: new URL('https://cairo-studio.com'),
  keywords: [
    'UI/UX Design', 'Web Development', 'Brand Identity', 'Digital Design',
    'Graphic Design', 'Illustrations', 'E-commerce', 'Cairo Studio', 'Cairo', 'Egypt'
  ],
  openGraph: {
    type: 'website',
    url: 'https://cairo-studio.com',
    title: 'Cairo Studio | Leading in UI/UX & Web Development in Egypt',
    description: 'Cairo Studio specializes in creating unique digital experiences through innovative design and development.',
    images: [
      {
        url: 'https://res.cloudinary.com/ds20vy7zo/image/upload/v1718564315/og_pgmuwr.webp',
        width: 1200,
        height: 630,
        alt: 'Cairo Studio Poster'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@CairoStudioo',
    title: 'Cairo Studio | Leading in UI/UX & Web Development in Egypt',
    description: 'Cairo Studio specializes in creating unique digital experiences through innovative design and development.',
    images: 'https://res.cloudinary.com/ds20vy7zo/image/upload/v1718564315/og_pgmuwr.webp'
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script async src="https://cloud.umami.is/script.js" data-website-id="2af62211-472c-4dfc-925a-197b88a8c4c9" />
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
        <Script id="gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`}
        </Script>
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <UserContextProvider>
            <SmoothScrolling />
            <Toaster />
            {children}
          </UserContextProvider>
          <FooterWithNoSSR />
        </ThemeProvider>
      </body>
    </html>
  );
}
