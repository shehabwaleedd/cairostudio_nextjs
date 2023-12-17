'use client'
import React, { useEffect, useState } from 'react';
import Opening from '../components/animations/opening/Opening';
import dynamic from 'next/dynamic';
const lazyComponent = dynamic(() => import('./lazyComponent'), { ssr: false });
import withLazyLoad from '../withLazyLoad';
import Head from 'next/head';

const HomePage: React.FC = () => {
  const [hasAnimationShown, setHasAnimationShown] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const animationShown = sessionStorage.getItem('hasAnimationShown') === 'true';
      setHasAnimationShown(animationShown);
    }
  }, []);
  const LazyComponentWithLazyLoad = withLazyLoad(lazyComponent);

  return (
    <>
      <Head>
        
      </Head>
      <main>
        {!hasAnimationShown && (<Opening />)}
        <LazyComponentWithLazyLoad />
      </main>

    </>
  );
}

export default HomePage;
