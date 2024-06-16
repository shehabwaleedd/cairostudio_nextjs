import React from 'react';
import styles from "./page.module.scss"
import Hero from "@/components/hero";
import MainProjects from "@/components/mainProjects";
import FaqsData from '@/components/workedWith/WorkedWithData';
import dynamic from 'next/dynamic';
const AboutUs = dynamic(() => import('@/components/aboutUs'));
const TextMask = dynamic(() => import('@/components/textMask'));
const ServicesList = dynamic(() => import('@/components/ServicesList'));
const Perpective = dynamic(() => import('@/components/perpective/Perpective'));
import Upper from '@/components/upper';
import WorkedWith from '@/components/workedWith';


const HomePage: React.FC = () => {

  return (
    <main className={styles.homePage}>
      <Hero />
      <MainProjects />
      <Upper p1="About Us" p2="03" />
      <AboutUs />
      <ServicesList p2={"04"} />
      <Upper p1="Snippets" p2="05" />
      <Perpective />
      <TextMask />
      <Upper p1="Worked With" p2="06" />
      <WorkedWith Data={FaqsData} />
    </main >
  );
}

export default HomePage;
