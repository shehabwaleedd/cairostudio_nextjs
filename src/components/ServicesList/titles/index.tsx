import React from 'react';
import Title from './Title';
import styles from './style.module.scss';

export interface ProjectData {
    title: string;
    link: string;
}

interface TitlesProps {
    data: ProjectData[];
}

const Titles: React.FC<TitlesProps> = ({ data }) => {

    return (
        <div className={styles.titles}>
            {data.map((project, i) => (
                <Title key={i} data={{ ...project }} />
            ))}
        </div>
    );
};

export default Titles;
