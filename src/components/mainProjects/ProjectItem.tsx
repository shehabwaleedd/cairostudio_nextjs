'use client'
import React, { memo, useLayoutEffect, useRef } from 'react';
import styles from "./style.module.scss";
import Image from 'next/image';
import { TransitionCard } from '../transitionLink';
import slugify from 'slugify';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
    id: string;
    title: string;
    poster: string;
    date: string;
    categories: string[];
    blurDataURL?: string;
}

interface ProjectItemProps {
    item: Project;
    index: number;
}

const imageSizes = {
    pyramids: { width: 1920, height: 1280 },
    lemkus: { width: 1920, height: 1237 },
    cairoHosts: { width: 806, height: 537 },
    tagMedia: { width: 2560, height: 1920 },
    alDar: { width: 2457, height: 3072 }
};

const getImageSize = (title: string) => {
    switch (slugify(title, { lower: true })) {
        case 'pyramids': return imageSizes.pyramids;
        case 'lemkus': return imageSizes.lemkus;
        case 'cairo-hosts': return imageSizes.cairoHosts;
        case 'tag-media': return imageSizes.tagMedia;
        case 'al-dar': return imageSizes.alDar;
        default: return { width: 500, height: 500 };
    }
}

const ProjectItem = memo(({ item, index }: ProjectItemProps) => {
    const { width, height } = getImageSize(item.title);
    const imageRef = useRef(null);

    useLayoutEffect(() => {
        if (imageRef.current) {
            gsap.fromTo(imageRef.current, 
                { clipPath: 'inset(0 0 100% 0)' }, 
                { 
                    clipPath: 'inset(0 0 0% 0)', 
                    ease: 'power3.inOut', 
                    duration: 1.5, 
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                        once: true,
                    }
                }
            );
        }
    }, []);

    return (
        <TransitionCard href={`/projects/${slugify(item.title, { lower: true })}`} className={styles.mainProjects__item}>
            <div ref={imageRef} className={styles.imageWrapper}>
                <Image
                    src={item.poster}
                    alt={item.title}
                    title={item.title}
                    width={width}
                    height={height}
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                    priority={index === 0}
                    placeholder='blur'
                    blurDataURL={item.blurDataURL}
                    quality={75}
                />
            </div>
            <div className={styles.desc}>
                <p>({index + 1})</p>
                <h2 className='title'>{item.title}</h2>
            </div>
        </TransitionCard>
    );
});

ProjectItem.displayName = "ProjectItem";

export default ProjectItem;
