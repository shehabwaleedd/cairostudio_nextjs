import React from 'react';
import Navbar from '../components/navbar';
import './globals.css';
import { Metadata } from 'next';
import { UserContextProvider } from '../context/authContext/AuthContext';
import { ThemeProvider } from '@/context/ThemeProvider';
import SmoothScrolling from '@/animations/SmoothScrolling';
import { Toaster } from 'sonner';
import Script from 'next/script';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Cairo Studio | Premium Web Development, Branding & Graphic Design in Egypt',
  description: 'Cairo Studio: Egypt\'s leading digital studio for web development, UI/UX, graphic design, and branding. Transform your digital presence.',

  metadataBase: new URL('https://cairo-studio.com'),
  keywords: [
    'UI/UX Design', 'Web Development', 'Brand Identity', 'Digital Design',
    'Graphic Design', 'Illustrations', 'E-commerce', 'Cairo Studio', 'Cairo', 'Egypt',
    'تصميم واجهة المستخدم', 'تطوير الويب', 'تصميم العلامة التجارية', 'التصميم الرقمي', 'التصميم الجرافيكي', 'الرسوم التوضيحية', 'التجارة الإلكترونية', 'استوديو القاهرة', 'مصر'
  ],
  openGraph: {
    type: 'website',
    url: 'https://cairo-studio.com',
    title: 'Cairo Studio | Premium Web Development, Branding & Graphic Design in Egypt',
    description: 'Cairo Studio: Egypt\'s leading digital studio for web development, UI/UX, graphic design, and branding. Transform your digital presence.',
    images: [
      {
        url: 'https://res.cloudinary.com/ds20vy7zo/image/upload/v1718735293/CDS_OG_Image_2_qdahop.webp',
        width: 1200,
        height: 630,
        alt: 'Cairo Studio - Leading Digital Agency in Egypt'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@CairoStudioo',
    title: 'Cairo Studio | Premium Web Development, Branding & Graphic Design in Egypt',
    description: 'Cairo Studio: Egypt\'s leading digital studio for web development, UI/UX, graphic design, and branding. Transform your digital presence.',
    images: 'https://res.cloudinary.com/ds20vy7zo/image/upload/v1718735293/CDS_OG_Image_2_qdahop.webp'
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  alternates: {
    canonical: 'https://cairo-studio.com',
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
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
