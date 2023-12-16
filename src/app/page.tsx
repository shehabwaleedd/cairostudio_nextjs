'use client'
import React from 'react';
const Hero = dynamic(() => import('../components/hero/Hero'));
const MainProjects = dynamic(() => import('../components/mainProjects/MainProjects'), {
  loading: () => <div style={{ height: 100 }}>loading...</div>,
  ssr: true
});
const TextMask = dynamic(() => import('../components/textMask/TextMask'), { ssr: true });
const AboutUs = dynamic(() => import('../components/aboutUs/AboutUs'), { ssr: true });
const Projects = dynamic(() => import('../components/Projects3D/Projects'), { ssr: false });
const Perpective = dynamic(() => import('../components/perpective/Perpective'), { ssr: false });
const Faqs = dynamic(() => import('../components/workedWith/WorkedWith'), { ssr: false });
import FaqsData from '../components/workedWith/WorkedWithData';
import dynamic from 'next/dynamic';
import Opening from '../components/animations/opening/Opening';

const HomePage: React.FC = () => {
  const hasAnimationShown = sessionStorage.getItem('hasAnimationShown');

  return (
    <main>
      {!hasAnimationShown ? (<Opening />) : (null)}

      <Hero />
      <MainProjects />
      <TextMask />
      <AboutUs />
      <Projects />
      <Perpective />
      <div style={{ padding: "0 2rem" }}>
        <Faqs Data={FaqsData} />
      </div>

    </main>
  );
}

export default HomePage;
