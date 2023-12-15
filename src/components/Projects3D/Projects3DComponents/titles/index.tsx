import React, { useState, useEffect } from 'react';
import Title from './Title'; // Adjust the import path as needed
import styles from './style.module.scss';

export interface ProjectData {
    title: string;
    speed: number;
    i: number;
}

interface TitlesProps {
    data: ProjectData[];
    setSelectedProject: (index: number | null) => void;
}

const Titles: React.FC<TitlesProps> = ({ data, setSelectedProject }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Set to true once the component has mounted
    }, []);

    if (!isClient) return null; // Prevent server-side rendering

    return (
        <div className={styles.titles}>
            {data.map((project, i) => (
                <Title key={i} data={{ ...project, i }} setSelectedProject={setSelectedProject} />
            ))}
        </div>
    );
};

export default Titles;
