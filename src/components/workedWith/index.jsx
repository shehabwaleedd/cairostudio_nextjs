'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './WorkedWith.scss';
import { motion } from 'framer-motion';


gsap.registerPlugin(ScrollTrigger);

const WorkedWith = ({ Data }) => {
    const [activeAccordion, setActiveAccordion] = useState(null);
    const containerRef = useRef(null);

    const closeAccordions = () => {
        const accordions = document.getElementsByClassName('accordion');
        for (let i = 0; i < accordions.length; i++) {
            accordions[i].classList.remove('open');
            accordions[i].nextElementSibling.style.maxHeight = null;
            accordions[i].getElementsByClassName('icon')[0].innerHTML = 'More +';
        }
    };

    const toggleAccordion = (index) => {
        const accordion = document.getElementsByClassName('accordion')[index];
        const panel = accordion.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            accordion.classList.remove('open');
            accordion.getElementsByClassName('icon')[0].innerHTML = 'More +';
        } else {
            closeAccordions();
            panel.style.maxHeight = panel.scrollHeight + 'px';
            accordion.classList.toggle('open');
            accordion.getElementsByClassName('icon')[0].innerHTML = 'Less -';
        }
    };

    useEffect(() => {
        if (containerRef.current) {
            const items = containerRef.current.querySelectorAll('.item-1');

            items.forEach((item, index) => {
                gsap.fromTo(item,
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration: 1,
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 70%',
                            toggleActions: 'play none none none',
                            onEnter: () => item.classList.add('in-view'),
                        },
                        delay: index * 0.1 // Stagger the animation by 0.1 seconds for each item
                    }
                );
            });
        }
    }, [containerRef]);

    return (
        <motion.div className="faqs"
            initial={{ opacity: 0, y: 100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }}
            exit={{ opacity: 0, y: 500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}
            ref={containerRef}>
            <div className="faqs__container containered">
                {Data.map(({ id, name, desc, categories }, index) => (
                    <div className={`item-1 ${activeAccordion === id ? 'open' : ''}`} key={id}>
                        <div className="accordion" onClick={() => toggleAccordion(index)}>
                            <div className="title"><h2>{name}</h2></div>
                            <div className="accCategory">
                                {categories && categories.map((category, index) => (
                                    <h3 key={index}>{category.replace("-", "")}</h3>
                                ))}
                                <div className="icon">{activeAccordion === 0 ? 'Less -' : 'More +'}</div>
                            </div>
                        </div>
                        <div className="panel">
                            {desc && desc.map((desc, index) => (
                                <div className="desc" key={index}><p>{desc}</p></div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default WorkedWith;
