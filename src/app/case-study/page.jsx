'use client'
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase.config';
import './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { useSwipeable } from 'react-swipeable';
import { debounce } from 'lodash'; // Ensure lodash is installed
import Head from 'next/head';


const useFetchProjects = () => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const querySnapshot = await getDocs(collection(db, "projects"));
            const projectsData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            sessionStorage.setItem("projects", JSON.stringify(projectsData));
            setProjects(projectsData.filter(p => p.displayed));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const storedProjects = sessionStorage.getItem("projects");
        if (storedProjects) {
            setProjects(JSON.parse(storedProjects));
            setProjects(JSON.parse(storedProjects).filter(p => p.displayed));

        } else {
            fetchData();
        }
    }, [fetchData]);

    return { projects, error };
};

// Animation function (consider moving to a separate utility file)
const animateSlides = (current, next, direction, sliderRef, innerSmallRef, setIsAnimating, setCurrent) => {
    const currentSlider = sliderRef.current[current];
    const currentInnerSmall = innerSmallRef.current[current];
    const nextSlider = sliderRef.current[next];
    const nextInnerSmall = innerSmallRef.current[next];


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

const ShowCase = () => {
    const { projects, error } = useFetchProjects();
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const sliderRef = useRef([]);
    const innerSmallRef = useRef([]);
    const containerRef = useRef(null);


    // eslint-disable-next-line react-hooks/exhaustive-deps
    const navigate = useCallback(debounce((direction) => {
        if (isAnimating || projects.length === 0) return;
        setIsAnimating(true);
        let next = (current + direction + projects.length) % projects.length;
        animateSlides(current, next, direction, sliderRef, innerSmallRef, setIsAnimating, setCurrent);
    }, 300), [current, projects.length, isAnimating]);

    const handlers = useSwipeable({
        onSwipedLeft: () => navigate(1),
        onSwipedRight: () => navigate(-1),
    });

    useEffect(() => {
        if (projects.length > 0) {
            gsap.set(sliderRef.current[current], { autoAlpha: 1 });
            gsap.set(innerSmallRef.current[current], { autoAlpha: 1 });
        }
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') navigate(1);
            if (e.key === 'ArrowLeft') navigate(-1);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [projects, current, navigate]);




    if (projects.length === 0) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <>
            <Head>
                <title>Showcase of Projects - Cairo Studio</title>
                <meta name="description" content="Explore our unique and innovative projects that showcase our expertise in design, technology, and creativity." />
                <meta name="keywords" content="innovative projects, creative design, technology, showcase, your brand name" />
                <meta property="og:title" content="Showcase of Projects - Cairo Studio" />
                <meta property="og:description" content="Dive into our portfolio of projects, highlighting our skills in design, development, and innovation." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:image" content="URL_TO_IMAGE" /> {/* Replace with a relevant image URL */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Showcase of Projects - Cairo Studio" />
                <meta name="twitter:description" content="Discover our projects that define the cutting edge of design and technology." />
                <meta name="twitter:image" content="URL_TO_IMAGE" />
            </Head>
            <main className="showCase" >
                <div className="showCase__container" ref={containerRef} {...handlers}>
                    {projects.map((item, index) => (
                        <React.Fragment key={item.id}>
                            <Link href={`/case-study/${item.title}`} className="slider slider--bg">
                                <div ref={el => sliderRef.current[index] = el}
                                    className={`slider__item ${current === index ? 'slider__item--current' : ''}`}>
                                    <Image className="slider__item-inner" src={item.cover} alt={item.title} width={5500} height={1200} />
                                </div>
                            </Link>
                            <div className="showCase__title">
                                {!item.title === 'Swag' && <h1 className="showCase__title__text">{item.title}</h1>}
                            </div>
                            <Link href={`/case-study/${item.title}`} className="slider slider--fg">
                                <div ref={el => innerSmallRef.current[index] = el} className={`slider__item-small ${current === index ? 'slider__item--current-small' : ''}`}>
                                    <Image className="slider__item-inner-small" src={item.homePage} width={100} height={100} alt={item.title} />
                                </div>
                            </Link>
                        </React.Fragment>
                    ))}
                    <div className="currentProject">
                        <p className="currentProject__length" >
                            00-{current + 1} — 00-{projects.length}
                        </p>
                        <h2 className="currentProject__title">{projects[current].title}</h2>
                    </div>
                    <div className='buttons'>
                        <button onClick={() => navigate(-1)} className='prev-button'><span>Prev</span></button>
                        <button onClick={() => navigate(1)} className='next-button'><span>Next</span></button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ShowCase;
