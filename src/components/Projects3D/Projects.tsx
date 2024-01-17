'use client'
import React, { lazy, Suspense, useEffect, useState } from 'react';
import styles from './Projects.module.scss'; // Assuming CSS Modules
import Image from 'next/image';

const EarthComponent = lazy(() => import('./Projects3DComponents/earth'));
const Projects3D = lazy(() => import('./Projects3DComponents/Projects3D'));

const Projectss: React.FC = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(typeof window !== 'undefined');
    }, []);

    return (
        <section className={styles.work}>
            <div className={styles.projectsMain}>
                {isClient && !window.matchMedia("(max-width: 1268px)").matches && (
                    <Suspense fallback={
                        <Image
                            src='/assets/placeholder.webp'
                            alt='planet earth'
                            width={500}
                            height={300}
                            placeholder='blur'
                            blurDataURL='/assets/placeholder.webp'
                        />
                    }>
                        <EarthComponent />
                    </Suspense>
                )}
                <Suspense fallback={<div>LOADING</div>}>
                    <Projects3D />
                </Suspense>
            </div>
        </section>
    );
};

export default Projectss;
