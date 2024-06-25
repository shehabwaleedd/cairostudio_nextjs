'use client'
import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './style.module.scss';

gsap.registerPlugin(ScrollTrigger);

const data = [
    "Exclusive Web Experiences",
    "Digital Excellence",
    "Exquisite Aesthetics",
    "Bespoke Branding",
    "Unparalleled Support",
    "Seamlessly Mobile-Optimized",
];

const Zoom = () => {

    useLayoutEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `.${styles.section__inner}`,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
            }
        });

        data.forEach((item, index) => {
            tl.fromTo(`.${styles.section__item}:nth-child(${index + 1})`,
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, ease: 'power1.inOut', duration: 2.5 }
            )
                .to(`.${styles.section__item}:nth-child(${index + 1})`,
                    { opacity: 0, ease: 'power1.inOut', duration: 2.5 },
                    "+=1.5"
                );
        });
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles.section__inner}>
                    <div className={styles.section__wrap}>
                        {data.map((item, index) => (
                            <h3 key={index} className={`${styles.section__item} section__item`}>{item}</h3>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Zoom;
