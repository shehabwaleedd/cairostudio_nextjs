'use client'
import React, { useEffect, useRef, useMemo } from 'react';
import Data from './Data';
import './AboutServices.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const AboutServices = () => {
    const containerRef = useRef(null);
    const DataMemoized = useMemo(() => Data, []); // Memoize the data

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const details = gsap.utils.toArray('.aboutServicesCo__right_content_section:not(:first-child)');
        const photos = gsap.utils.toArray('.aboutServicesCo__left_container_details:not(:first-child)');
        gsap.set(photos, { yPercent: 101 });
        const allPhotos = gsap.utils.toArray('.aboutServicesCo__left_container_details');
        details.forEach((detail, index) => {
            let headline = detail.querySelector('h2');
            let animation = gsap.timeline().to(photos[index], { yPercent: 0 }).set(allPhotos[index], { autoAlpha: 0 });
            ScrollTrigger.create({
                trigger: headline,
                start: "top 80%",
                end: "top 50%",
                animation: animation,
                scrub: true,
            })
        });
        const spans = gsap.utils.toArray('.aboutServices__details_container');
        spans.forEach((span, index) => {
            let animation = gsap.timeline().to(span, { left: "0", opacity: 0.5, ease: "power3.Out" });
            ScrollTrigger.create({
                trigger: span,
                start: "center 80%",
                end: "top 50%",
                animation: animation,
                scrub: true,
            })
        });
    }, []);

    return (
        <section className="aboutServices">
            <div className="aboutServices__container" ref={containerRef}>
                <div className="aboutServicesCo__right">
                    <div className="aboutServicesCo__right_content">
                        {DataMemoized.map((item) => (
                            <div key={item.id} className="aboutServicesCo__right_content_section">
                                <h2 ref={(el) => (item.headline = el)}>- 0{item.id}</h2>
                                {item.elements.map((element, index) => (
                                    <div key={index} className={`aboutServices__details_container`}>
                                        <p >{element.text}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="aboutServicesCo__left">
                    <div className="aboutServicesCo__left_container">
                        {DataMemoized.map((item) => (
                            <div key={item.id} className={`aboutServicesCo__left_container_details`}>
                                <h1 ref={(el) => (item.headline = el)}>{item.title}</h1>
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
