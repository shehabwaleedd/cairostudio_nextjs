'use client'
import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { m, useTransform, useScroll, LazyMotion, domAnimation } from 'framer-motion';
import styles from './page.module.scss';
import Image from 'next/image';
import Data from './Data';

interface Dimension {
    width: number;
    height: number;
}

const Perpective: React.FC = () => {
    const gallery = useRef<HTMLDivElement>(null);
    const [dimension, setDimension] = useState<Dimension>({ width: 0, height: 0 });

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 1.25]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 4.3]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 1.25]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 4.3]);


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

    return (
        <section className='perpective'>
            <div className={styles.spacer}></div>
            <div ref={gallery} className={styles.gallery}>
                <Column data={[Data[4], Data[5], Data[8]]} y={y} />
                <Column data={[Data[0], Data[7], Data[9]]} y={y2} />
                <Column data={[Data[10], Data[9], Data[10]]} y={y3} />
                <Column data={[Data[3], Data[12], Data[8]]} y={y4} />
            </div>
            <div className={styles.spacer}></div>
        </section>
    );
};

export default Perpective;

interface ColumnProps {
    data: typeof Data;
    y: any; // Define a more specific type if possible
}

const Column: React.FC<ColumnProps> = ({ data, y }) => {
    return (
        <LazyMotion features={domAnimation}>
            <m.div className={styles.column} style={{ y }}>
                {data.map((item, i) => (
                    <div key={i} className={styles.imageContainer}>
                        <Image src={item.image} alt="Snapshots of our work with our latest clients" title='Snapshots of our work with our latest clients' loading='lazy' placeholder='blur' sizes='(max-width: 500px) 100vw, 500px, (max-width: 768px) 100vw, 500px, (max-width: 1024px) 100vw, 500px, (max-width: 1280px) 100vw, 500px, (max-width: 1536px) 100vw, 500px, 500px' />
                    </div>
                ))}
            </m.div>
        </LazyMotion>
    );
};
