import React, { useEffect, useState, useRef } from 'react';
import useFetchProjects from '@/hooks/useFetchProjects';
import gsap from 'gsap';
import './Opening.css';

const Opening = ({ onCompleted }: { onCompleted: () => void; }) => {
    const [animationComplete, setAnimationComplete] = useState(false);
    const counterRef = useRef<HTMLParagraphElement>(null);
    const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
    const cairoRef = useRef<HTMLParagraphElement>(null);
    const barsRef = useRef(new Array(5).fill(null));

    useFetchProjects();

    useEffect(() => {
        let currentValue = 0;
        const updateCounter = () => {
            currentValue++;
            if (currentValue <= 100) {
                if (counterRef.current) {
                    (counterRef.current as HTMLDivElement).textContent = currentValue.toString();
                }
            } else {
                clearInterval(interval);
                setAnimationComplete(true);
            }
        };

        const interval = setInterval(updateCounter, 30);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (animationComplete) {
            const tl = gsap.timeline({
                onComplete: () => {
                    sessionStorage.setItem('hasAnimationShown', 'true');
                    onCompleted();
                }
            });

            tl.to(counterRef.current, { duration: 0.5, opacity: 0, ease: 'power2.inOut' });

            titleRefs.current.forEach((title, index) => {
                tl.to(title, {
                    duration: 0.1,
                    opacity: 1,
                    ease: 'power2.inOut'
                }, `+=${0.05 * index}`)
                    .to(title, {
                        duration: 0.1,
                        opacity: 0,
                        ease: 'power2.inOut'
                    });
            });

            tl.to(cairoRef.current, { opacity: 1, duration: 2, ease: 'power2.inOut' })
                .to(cairoRef.current, { opacity: 0, duration: 1, ease: 'power2.inOut' });

            barsRef.current.forEach(bar => {
                tl.to(bar, {
                    duration: 2,
                    opacity: 1,
                    height: 0,
                    y: -400,
                    ease: 'power3.inOut'
                }, "<");
            });
        }
    }, [animationComplete, onCompleted]);

    return (
        <div className="opening">
            <h1 ref={counterRef} className='counter'>0</h1>
            <div className="openingAnimation__container">
                {['Graphic Design', 'UI/UX', 'Branding', 'Web Development'].map((title, index) => (
                    <h2 key={title} ref={el => { titleRefs.current[index] = el; }} className='logoname'>{title}</h2>
                ))}
                <h2 ref={cairoRef} className='cairostudio'>Cairo Studio</h2>
            </div>
            <div className='overlay'>
                {barsRef.current.map((_, index) => (
                    <div ref={el => { barsRef.current[index] = el; }} className='bar' key={index}></div>
                ))}
            </div>
        </div>
    );
};

export default Opening;
