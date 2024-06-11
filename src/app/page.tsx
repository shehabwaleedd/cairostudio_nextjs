import React from 'react';
import styles from "./page.module.scss"
import Opening from '@/animations/opening';
import Hero from "@/components/hero";
import MainProjects from "@/components/mainProjects";
import FaqsData from '@/components/workedWith/WorkedWithData';
import dynamic from 'next/dynamic';
const AboutUs = dynamic(() => import('@/components/aboutUs'));
const TextMask = dynamic(() => import('@/components/textMask'));
const ServicesList = dynamic(() => import('@/components/ServicesList'));
const Perpective = dynamic(() => import('@/components/perpective/Perpective'));
const Faqs = dynamic(() => import('@/components/workedWith'));
import Upper from '@/components/upper';


const HomePage: React.FC = () => {

  return (
    <main className={styles.homePage}>
      <Opening />
      <Hero />
      <MainProjects />
      <Upper p1="About Us" p2="03" />
      <AboutUs />
      <ServicesList p2={"04"} />
      <Upper p1="Snippets" p2="05" />
      <Perpective />
      <TextMask />
      <Upper p1="Worked With" p2="06" />
      <Faqs Data={FaqsData} />
    </main >
  );
}

export default HomePage;
