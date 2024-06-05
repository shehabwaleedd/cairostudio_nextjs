'use client'
import React, { useEffect, useRef, useLayoutEffect } from 'react';
import Data from './Data';
import './aboutServices.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface Project {
    id: number;
    headline?: HTMLHeadingElement | null;
    title: string;
    elements: { text: string }[];
}

const AboutServices = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const details = gsap.utils.toArray<HTMLElement>('.aboutServicesCo__right_content_section:not(:first-child)');
        const photos = gsap.utils.toArray<HTMLElement>('.aboutServicesCo__left_container_details:not(:first-child)');
        gsap.set(photos, { yPercent: 101 });
        const allPhotos = gsap.utils.toArray<HTMLElement>('.aboutServicesCo__left_container_details');

        details.forEach((detail, index) => {
            const headline = detail.querySelector('h2') as HTMLElement;
            const animation = gsap.timeline({
                defaults: { ease: "power2.inOut" }
            })
                .fromTo(photos[index], { yPercent: 101 }, { yPercent: 0, duration: 1.5 })
                .from(headline, { scale: 0.8, autoAlpha: 0, duration: 1 }, "-=1")
                .set(allPhotos[index], { autoAlpha: 0 });

            ScrollTrigger.create({
                trigger: headline,
                start: "top 80%",
                end: "top 50%",
                animation: animation,
                scrub: 0.5,
            });
        });
    }, []);

    return (
        <section className="aboutServices">
            <div className="aboutServices__container" ref={containerRef}>
                <div className="aboutServicesCo__right">
                    <div className="aboutServicesCo__right_content">
                        {Data.map((item: Project) => (
                            <div key={item.id} className="aboutServicesCo__right_content_section">
                                <h2 ref={(el) => { item.headline = el; }}>- 0{item.id}</h2>
                                {item.elements.map((element, index) => (
                                    <div key={index} className={`aboutServices__details_container`}>
                                        <AnimatedText key={index}>{element.text}</AnimatedText>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="aboutServicesCo__left">
                    <div className="aboutServicesCo__left_container">
                        {Data.map((item: Project) => (
                            <div key={item.id} className={`aboutServicesCo__left_container_details`}>
                                <h1 ref={(el) => {item.headline = el}}>{item.title}</h1>
                            </div>
                        ))}
                    </div>
                    <p>We build beautiful digital products and experiences for brands, organisations and agencies. We’re obsessed with technology and harness our skills in research and strategy, branding, UX/UI, and development to create impactful web experiences that drive value for our clients and their customers.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutServices;

function AnimatedText({ children }: { children: string }) {
    const text = useRef<HTMLParagraphElement>(null);
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(text.current,
            { opacity: 0, x: 200 },
            {
                scrollTrigger: {
                    trigger: text.current,
                    scrub: true,
                    start: "0px bottom",
                    end: "bottom+=400px bottom",
                },
                opacity: 1,
                x: 0,
                duration: 2,
                ease: "power3.out"
            }
        );
    }, []);

    return <p ref={text}>{children}</p>
}
