import React, { useState, useEffect } from 'react';
import Titles from './titles'; 
import Descriptions from './descriptions'; 
import Data from '../WhatWeDoData'; 
import styles from './Projects3D.module.scss'; 
import { ProjectData } from './titles';


const Projects3D: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true once the component has mounted
  }, []);

  if (!isClient) return null; // Prevent server-side rendering

  return (
    <div className={styles.projects3D}>
      <h2>Our Services</h2>
      <Titles data={Data as unknown as ProjectData[]} setSelectedProject={setSelectedProject} />
      <Descriptions data={Data as unknown as ProjectData[]} selectedProject={selectedProject} />

    </div>
  );
};

export default Projects3D;
