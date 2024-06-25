import React from 'react';
import styles from "./page.module.scss"
import Hero from "@/components/hero";
import MainProjects from "@/components/mainProjects";
import FaqsData from '@/components/workedWith/WorkedWithData';
import dynamic from 'next/dynamic';
const AboutUs = dynamic(() => import('@/components/aboutUs'));
const TextMask = dynamic(() => import('@/components/textMask'));
const ServicesList = dynamic(() => import('@/components/ServicesList'));
const WorkedWith = dynamic(() => import('@/components/workedWith'));
const Perpective = dynamic(() => import('@/components/perpective/Perpective'));
import Upper from '@/components/upper';
import Zoom from '@/components/zoom';

const HomePage: React.FC = () => {
  return (
    <main className={styles.homePage}>
      <Hero />
      <MainProjects />
      <Upper p1="About Us" p2="03" />
      <AboutUs />
      <ServicesList p2="04" />
      <Upper p1="Snippets" p2="05" />
      <Perpective />
      <Upper p1="What We Offer" p2="06" />
      <Zoom />
      <TextMask />
      <Upper p1="Worked With" p2="07" />
    <WorkedWith Data={FaqsData} />
    </main >
  );
}

export default HomePage;
