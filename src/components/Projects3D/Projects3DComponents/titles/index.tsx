import React, { useState, useEffect } from 'react';
import Title from './Title'; // Adjust the import path as needed
import styles from './style.module.scss';

export interface ProjectData {
    title: string;
    speed: number;
    i?: number;
    link: string;
    descTitle?: string;
    desc?: string;
}

interface TitlesProps {
    data: ProjectData[];
    setSelectedProject: (index: number | null) => void;
}

const Titles: React.FC<TitlesProps> = ({ data, setSelectedProject }) => {

    return (
        <div className={styles.titles}>
            {data.map((project, i) => (
                <Title key={i} data={{ ...project, i }} setSelectedProject={setSelectedProject} />
            ))}
        </div>
    );
};

export default Titles;
