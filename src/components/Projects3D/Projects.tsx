import React  from 'react';
import styles from './Projects.module.scss'; 
import dynamic from 'next/dynamic';
const Projects3D = dynamic(() => import('./Projects3DComponents/Projects3D'));

const Projectss: React.FC = () => {
    return (
        <section className={styles.work}>
            <div className={styles.projectsMain}>
                <Projects3D />
            </div>
        </section>
    );
};

export default Projectss;
