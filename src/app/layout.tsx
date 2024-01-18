import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '../components/navbar/Nabvar'
import './globals.css';
const FooterWithNoSSR = dynamic(() => import('../components/footer/Footer'), { ssr: false });
import { Metadata } from 'next';
import SmoothScrolling from '@/components/SmoothScrolling';
import { UserContextProvider } from '../components/authContext/AuthContext';
import { AnimatePresence } from 'framer-motion';




export const metadata: Metadata = {
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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="noise" suppressHydrationWarning>
      <body>
        <Navbar />
        <UserContextProvider>
          <SmoothScrolling>
            {children}
          </SmoothScrolling>
        </UserContextProvider>
        <FooterWithNoSSR />
      </body>
    </html>
  )
}
