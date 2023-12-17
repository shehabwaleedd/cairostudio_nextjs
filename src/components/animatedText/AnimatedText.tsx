import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedTextProps } from '@/common/types';

import './AnimatedText.scss';

gsap.registerPlugin(ScrollTrigger);

const AnimatedText: React.FC<AnimatedTextProps> = ({ data }) => {
    const { title } = data;
    const container = useRef<HTMLDivElement>(null);
    const text = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        gsap.fromTo(text.current, { clipPath: 'inset(0 100% 0 0)' }, { 
            clipPath: 'inset(0 0% 0 0)', 
            duration: 1,
            scrollTrigger: {
                trigger: container.current!,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    }, []);

    return (
        <div ref={container} className="title">
            <div className="wrapper">
                <p ref={text}>
                    {title}
                </p>
                <p>
                    {title}
                </p>
            </div>
        </div>
    );
};

export default AnimatedText;