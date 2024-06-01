'use client'
import React, { useState, useEffect } from 'react';
import Titles from './titles';
import Descriptions from './descriptions';
import Data from '../WhatWeDoData';
import styles from './style.module.scss';



const Projects3D: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className={styles.projects3D}>
      <h2>Our Services</h2>
      <Titles data={Data} setSelectedProject={setSelectedProject} />
      <Descriptions data={Data} selectedProject={selectedProject} />

    </div>
  );
};

export default Projects3D;
