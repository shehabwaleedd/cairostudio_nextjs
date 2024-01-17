'use client'
import React, { Suspense, useEffect, useState } from 'react';
import Opening from '../components/animations/opening/Opening';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import LazyComponent from './lazyComponent';

const HomePage: React.FC = () => {
  
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
        <LazyComponent />
      </main >
    </>
  );
}

export default HomePage;
