'use client'
import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from "./page.module.scss";
import Link from 'next/link';
import gsap from 'gsap';
import { useSwipeable, SwipeableHandlers } from 'react-swipeable';
import { debounce } from 'lodash'; // Ensure lodash is installed
import useFetchProjects from '@/hooks/useFetchProjects';

type ProjectType = {
    id: string;
    title: string;
    cover: string;
    homePage: string;
    displayed: boolean;
    [key: string]: any; // For any additional properties
};


// Animation function (consider moving to a separate utility file)
const animateSlides = (
    current: number,
    next: number,
    direction: number,
    sliderRef: React.RefObject<HTMLDivElement[]>,
    innerSmallRef: React.RefObject<HTMLDivElement[]>,
    setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrent: React.Dispatch<React.SetStateAction<number>>
) => {
    const currentSlider = sliderRef.current?.[current];
    const currentInnerSmall = innerSmallRef.current?.[current];
    const nextSlider = sliderRef.current?.[next];
    const nextInnerSmall = innerSmallRef.current?.[next];

    if (!currentSlider || !currentInnerSmall || !nextSlider || !nextInnerSmall) return;

    const tl = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        onComplete: () => {
            setCurrent(next);
            setIsAnimating(false);
        }
    });
    const staggerStart = 0.1; // Adjust this value as needed

    tl.to(currentSlider, { xPercent: -100 * direction, autoAlpha: 0, duration: 1, ease: "power3.inOut" }, staggerStart)
        .to(currentInnerSmall, { xPercent: -100 * direction, autoAlpha: 0, duration: 1, ease: "power3.inOut" }, staggerStart)
        .fromTo(nextSlider, { xPercent: 100 * direction, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, duration: 1, ease: "power3.inOut" }, staggerStart)
        .fromTo(nextInnerSmall, { xPercent: 100 * direction, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, duration: 1, ease: "power3.inOut" }, staggerStart);
};

const ShowCase: React.FC = () => {
    const { projects, error } = useFetchProjects();
    const [current, setCurrent] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const sliderRef = useRef<HTMLDivElement[]>([]);
    const innerSmallRef = useRef<HTMLDivElement[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const navigate = useCallback(debounce((direction: number) => {
        if (isAnimating || projects.length === 0) return;
        setIsAnimating(true);
        const next = (current + direction + projects.length) % projects.length;
        animateSlides(current, next, direction, sliderRef, innerSmallRef, setIsAnimating, setCurrent);
    }, 300), [current, projects.length, isAnimating]);

    const handlers: SwipeableHandlers = useSwipeable({
        onSwipedLeft: () => navigate(1),
        onSwipedRight: () => navigate(-1),
    });

    useEffect(() => {
        if (projects.length > 0) {
            gsap.set(sliderRef.current[current], { autoAlpha: 1 });
            gsap.set(innerSmallRef.current[current], { autoAlpha: 1 });
        }
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') navigate(1);
            if (e.key === 'ArrowLeft') navigate(-1);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [projects, current, navigate]);

    if (projects.length === 0) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <main className={styles.showCase}>
            <div className={styles.showCase__container} {...handlers} ref={containerRef}>
                {projects.map((item, index) => (
                    <React.Fragment key={item.id}>
                        <Link href={`/case-study/${item.title}`} className={`${styles.slider} ${styles.slider__bg}`}>
                            <div ref={(el) => { if (el) sliderRef.current[index] = el; }}
                                className={`${styles.slider__item} ${current === index ? styles.slider__item__current : ''}`}>
                                <div className={styles.slider__item_inner}
                                    style={{ backgroundImage: `url(${item.cover})` }}>
                                </div>
                            </div>
                        </Link>
                        <Link href={`/case-study/${item.title}`} className={`${styles.slider} ${styles.slider__fg}`}>
                            <div ref={(el) => { if (el) innerSmallRef.current[index] = el; }} className={`${styles.slider__item_small} ${current === index ? styles.slider__item__current_small : ''}`}>
                                <div className={styles.slider__item_inner_small} style={{ backgroundImage: `url(${item.homePage})` }}></div>
                            </div>
                        </Link>
                    </React.Fragment>
                ))}
                <div className={styles.currentProject}>
                    <p className={styles.currentProject__length}>
                        00-{current + 1} — 00-{projects.length}
                    </p>
                    <h2 className={styles.currentProject__title}>{projects[current].title}</h2>
                </div>
                <div className={styles.buttons}>
                    <button onClick={() => navigate(-1)} className={styles.prev_button}><span>Prev</span></button>
                    <button onClick={() => navigate(1)} className={styles.next_button}><span>Next</span></button>
                </div>
            </div>
        </main>
    );
};

export default ShowCase;
