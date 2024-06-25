'use client';
import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import dynamic from 'next/dynamic';
const InsideSlider = dynamic(() => import('@/app/projects/components/insideSlider'));
import './WorkedWith.scss';
import { Project } from '@/common/types';

gsap.registerPlugin(ScrollTrigger);

interface BaseData {
    id: number;
    name: string;
    desc?: string[];
    categories?: string[];
    insideSlider?: boolean;
}

interface WorkedWithProps<T extends BaseData> {
    Data: T[];
    filteredProjects?: Project[];
}

const WorkedWith = <T extends BaseData>({ Data, filteredProjects }: WorkedWithProps<T>) => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const closeAccordions = () => {
        const accordions = document.getElementsByClassName('accordion');
        for (let i = 0; i < accordions.length; i++) {
            const accordion = accordions[i] as HTMLElement;
            accordion.classList.remove('open');
            const panel = accordion.nextElementSibling as HTMLElement;
            if (panel) {
                panel.style.maxHeight = '';
                const icon = accordion.getElementsByClassName('icon')[0] as HTMLElement;
                if (icon) icon.innerHTML = 'More +';
            }
        }
    };

    const toggleAccordion = (index: number) => {
        const accordion = document.getElementsByClassName('accordion')[index] as HTMLElement;
        const panel = accordion.nextElementSibling as HTMLElement;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = '';
            accordion.classList.remove('open');
            const icon = accordion.getElementsByClassName('icon')[0] as HTMLElement;
            if (icon) icon.innerHTML = 'More +';
        } else {
            closeAccordions();
            panel.style.maxHeight = `${panel.scrollHeight}px`;
            accordion.classList.toggle('open');
            const icon = accordion.getElementsByClassName('icon')[0] as HTMLElement;
            if (icon) icon.innerHTML = 'Less -';
        }
    };

    useLayoutEffect(() => {
        if (containerRef.current) {
            const items = containerRef.current.querySelectorAll('.item-1');

            items.forEach((item) => {
                gsap.to(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 90%',
                        toggleClass: { targets: item, className: 'in-view' },
                        once: true, // Animation happens only once
                    },
                });
            });
        }
    }, []);

    return (
        <section className="faqs" ref={containerRef}>
            <div className="faqs__container containered">
                {Data.map(({ id, name, desc, categories, insideSlider }, index) => (
                    <div className={`item-1 ${activeAccordion === id ? 'open' : ''}`} key={id}>
                        <div className="accordion" onClick={() => toggleAccordion(index)}>
                            <div className="title">
                                <h2>{name}</h2>
                            </div>
                            <div className="accCategory">
                                {categories && categories.slice(0, 3).map((category, catIndex) => (
                                    <h3 key={`${id}-${catIndex}`}>{category.replace("-", "")}</h3>
                                ))}
                                <div className="icon">{activeAccordion === id ? 'Less -' : 'More +'}</div>
                            </div>
                        </div>
                        <div className="panel">
                            {insideSlider && filteredProjects ? (
                                <InsideSlider selectedProject={filteredProjects[index]} />
                            ) : (
                                desc && desc.map((descItem, descIndex) => (
                                    <div className="desc" key={`${id}-${descIndex}`}>
                                        <p>{descItem}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkedWith;
