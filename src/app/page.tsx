'use client'
import React, { Suspense, useEffect, useState } from 'react';
import Opening from '../components/animations/opening/Opening';
import dynamic from 'next/dynamic';
const LazyComponent = dynamic(() => import('./lazyComponent'), { ssr: false });
import Head from 'next/head';

const HomePage: React.FC = () => {
  const [hasAnimationShown, setHasAnimationShown] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const animationShown = sessionStorage.getItem('hasAnimationShown') === 'true';
      setHasAnimationShown(animationShown);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionStorage.getItem('hasAnimationShown')]); // Add this line
  return (
    <>
      <Head>
        <title>Cairo Studio</title>
        <meta name="description" content="Cairo Studio is a digital design studio based in Cairo, Egypt. We are specialized in web development, brand identity, website UI – UX design, graphic design, marketing & illustration." />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://cairo-studio.com" />
        <meta property="twitter:title" content="Cairo Studio" />
        <meta property="twitter:description" content="Cairo Studio is a digital design studio based in Cairo, Egypt. We are specialized in web development, brand identity, website UI – UX design, graphic design, marketing & illustration." />
        <meta property="twitter:image" content="https://cairo-studio.com/images/cairostudio.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cairo-studio.com" />
        <meta property="og:title" content="Cairo Studio" />
        <meta property="og:description" content="Cairo Studio is a digital design studio based in Cairo, Egypt. We are specialized in web development, brand identity, website UI – UX design, graphic design, marketing & illustration." />
        <meta property="og:image" content="https://cairo-studio.com/images/cairostudio.jpg" />
      </Head>
      <main>
        {!hasAnimationShown && (<Opening />)}
        <Suspense fallback={
          <div>
            <h1 style={{ color: '#fff', textAlign: 'center' }}>Loading...</h1>
          </div>}>
          <LazyComponent />
        </Suspense >
      </main >
    </>
  );
}

export default HomePage;
