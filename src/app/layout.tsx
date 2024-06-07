import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '../components/navbar'
import './globals.css';
const FooterWithNoSSR = dynamic(() => import('../components/footer'), { ssr: false });
import { Metadata } from 'next';
import { UserContextProvider } from '../context/authContext/AuthContext';
import SmoothScrolling from '@/animations/SmoothScrolling';
import { Toaster } from 'sonner';

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
    <html lang="en" suppressHydrationWarning>
      <head>
      <script defer src="https://cloud.umami.is/script.js" data-website-id="2af62211-472c-4dfc-925a-197b88a8c4c9"></script>
      </head>
      <body>
        <Navbar />
        <UserContextProvider>
          <SmoothScrolling>
            <Toaster />
            {children}
          </SmoothScrolling>
        </UserContextProvider>
        <FooterWithNoSSR />
      </body>
    </html>
  )
}
