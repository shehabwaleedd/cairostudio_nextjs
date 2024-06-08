'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { m, useTransform, useScroll, LazyMotion, domAnimation } from 'framer-motion';
import styles from './page.module.scss';
import Image from 'next/image';
import Data from './Data';
import useWindowSize from '@/hooks/useWindowWidth';

interface Dimension {
    width: number;
    height: number;
}

const Perpective: React.FC = () => {
    const gallery = useRef<HTMLDivElement>(null);
    const { isMobile } = useWindowSize();
    const [dimension, setDimension] = useState<Dimension>({ width: 0, height: 0 });

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ['start end', 'end start'],
    });

    const verticalTransforms = {
        transform1: useTransform(scrollYProgress, [0, 1], [0, dimension.height * 1.25]),
        transform2: useTransform(scrollYProgress, [0, 1], [0, dimension.height * 4.3]),
        transform3: useTransform(scrollYProgress, [0, 1], [0, dimension.height * 1.25]),
    };

    const horizontalTransforms = {
        transform1: useTransform(scrollYProgress, [0, 1], [0, dimension.width * -2.25]),
        transform2: useTransform(scrollYProgress, [0, 1], [0, dimension.width * 1.3]),
        transform3: useTransform(scrollYProgress, [0, 1], [0, dimension.width * -3.25]),
    };

    const resize = useCallback(() => {
        setDimension({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, []);

    useEffect(() => {
        window.addEventListener('resize', resize);
        resize(); // Call it once to initialize
        return () => window.removeEventListener('resize', resize);
    }, [resize]);

    const transforms = isMobile ? horizontalTransforms : verticalTransforms;

    return (
        <>
            {!isMobile && <section className='perpective'>
                <div ref={gallery} className={styles.gallery}>
                    <Column data={[Data[4], Data[5], Data[8]]} transform={transforms.transform1} isMobile={isMobile} />
                    <Column data={[Data[0], Data[7], Data[9]]} transform={transforms.transform2} isMobile={isMobile} />
                    <Column data={[Data[10], Data[9], Data[10]]} transform={transforms.transform3} isMobile={isMobile} />
                </div>
            </section>}
        </>
    );
};

export default Perpective;




interface ColumnProps {
    data: typeof Data;
    transform: any; // Define a more specific type if possible
    isMobile: boolean;
}

const Column: React.FC<ColumnProps> = ({ data, transform, isMobile }) => {
    return (
        <LazyMotion features={domAnimation}>
            <m.div className={`${styles.column}`} style={isMobile ? {} : { y: transform }}>
                {data.map((item, i) => (
                    <div key={i} className={styles.imageContainer}>
                        <Image
                            src={item.image}
                            alt="Snapshots of our work with our latest clients"
                            title="Snapshots of our work with our latest clients"
                            loading="lazy"
                            placeholder="blur"
                            sizes="(max-width: 500px) 100vw, 500px, (max-width: 768px) 100vw, 500px, (max-width: 1024px) 100vw, 500px, (max-width: 1280px) 100vw, 500px, (max-width: 1536px) 100vw, 500px, 500px"
                        />
                    </div>
                ))}
            </m.div>
        </LazyMotion>
    );
};
