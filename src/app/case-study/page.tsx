'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase.config';
import './styles.module.scss';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useSwipeable } from 'react-swipeable';
import { debounce } from 'lodash.debounce';
import Head from 'next/head';
import gsap from 'gsap';
import Image from 'next/image';
import { Project } from '@/common/types';

const useFetchProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'projects'));
            const projectsData = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            })) as Project[];
            setProjects(projectsData.filter((p) => p.displayed));
        } catch (err: any) {
            setError(err.message);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { projects, error };
};

const CaseStudy = () => {
    const { projects, error } = useFetchProjects();
    const [current, setCurrent] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const sliderRefs = useRef<(HTMLDivElement | null)[]>([]);
    const innerSmallRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);



    const animateSlides = useCallback(
        (currentIdx: number, nextIdx: number, direction: number) => {
            const currentSlider = sliderRefs.current[currentIdx];
            const currentInnerSmall = innerSmallRefs.current[currentIdx];
            const nextSlider = sliderRefs.current[nextIdx];
            const nextInnerSmall = innerSmallRefs.current[nextIdx];

            const tl = gsap.timeline({
                defaults: { ease: 'power3.inOut' },
                onComplete: () => {
                    setCurrent(nextIdx);
                    setIsAnimating(false);
                },
            });

            tl.to(currentSlider, { xPercent: -100 * direction, autoAlpha: 0, duration: 1 })
                .to(currentInnerSmall, { xPercent: -100 * direction, autoAlpha: 0, duration: 1 }, '<')
                .fromTo(nextSlider, { xPercent: 100 * direction, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, duration: 1 }, '<')
                .fromTo(nextInnerSmall, { xPercent: 100 * direction, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, duration: 1 }, '<');
        },
        [],
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const navigate = useCallback(
        debounce((direction: number) => {
            if (isAnimating || projects.length === 0) return;
            setIsAnimating(true);
            const next = (current + direction + projects.length) % projects.length;
            animateSlides(current, next, direction);
        }, 300),
        [current, projects.length, isAnimating],
    );

    const handlers = useSwipeable({
        onSwipedLeft: () => navigate(1),
        onSwipedRight: () => navigate(-1),
    });

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') navigate(1);
            if (e.key === 'ArrowLeft') navigate(-1);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [navigate]);



    if (error) return <p>Error: {error}</p>;
    if (projects.length === 0) return <p>Loading...</p>;
    return (
        <>
            <Head>
                {/* Head content */}
            </Head>
            <main className='showCase'>
                <div className='showCase__container' {...handlers}>
                    {projects.map((item, index) => (
                        <React.Fragment key={item.id}>
                            <Link href={`/case-study/${item.title}`} passHref>
                                <div ref={(el) => (sliderRefs.current[index] = el)}>
                                    <Image src={item.cover} alt={item.title} layout='fill' objectFit='cover' className={`slider__item ${current === index ? 'slider__item--current' : ''}`} />
                                </div>
                            </Link>
                            <div className='showCase__title'>
                                {item.title !== 'Swag' && <h1 className='showCase__title__text'>{item.title}</h1>}
                            </div>
                            <Link href={`/case-study/${item.title}`} passHref>
                                <div ref={(el) => (innerSmallRefs.current[index] = el)}>
                                    <Image src={item.homePage} alt={item.title + ' homepage'} layout='fill' blurDataURL={item.homePage} quality={100} placeholder='blur' className={`slider__item-small ${current === index ? 'slider__item--current-small' : ''}`} />
                                </div>
                            </Link>
                        </React.Fragment>
                    ))}
                    <div className='currentProject'>
                        <p className='currentProject__length'>
                            00-{current + 1} — 00-{projects.length}
                        </p>
                        <h2 className='currentProject__title'>{projects[current]?.title}</h2>
                    </div>
                    <div className='buttons'>
                        <button onClick={() => navigate(-1)} className='prev-button'>
                            <span>Prev</span>
                        </button>
                        <button onClick={() => navigate(1)} className='next-button'>
                            <span>Next</span>
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default CaseStudy;
