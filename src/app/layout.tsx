import React from 'react';
import Navbar from '../components/navbar';
import './globals.css';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import { UserContextProvider } from '../context/authContext/AuthContext';
import { ThemeProvider } from '@/context/ThemeProvider';
// import SmoothScrolling from '@/animations/SmoothScrolling';
import { Toaster } from 'sonner';
import Footer from '@/components/footer';
// import CookiesConsent from '@/components/cookiesConsent';

const SmoothScrolling = dynamic(() => import('@/animations/SmoothScrolling'), { ssr: false });
const CookiesConsent = dynamic(() => import('@/components/cookiesConsent'), { ssr: false });

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
      <body>
        <ThemeProvider>
          <Navbar />
          <UserContextProvider>
            <SmoothScrolling />
            <CookiesConsent />
            {children}
          </UserContextProvider>
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
