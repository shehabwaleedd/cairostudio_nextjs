import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import useFetchProjects from '../../../hooks/useFetchProjects';
import './Opening.css';

const Opening = () => {
    const [currentValue, setCurrentValue] = useState(0);
    const [animationComplete, setAnimationComplete] = useState(false);
    const openingRef = useRef(null);

    useFetchProjects();

    useEffect(() => {
        let interval;

        function updateCounter() {
            if (currentValue >= 100) {
                clearInterval(interval);
                setCurrentValue(100);
                // Set animationComplete to true when the counter reaches 100
                setAnimationComplete(true);
            } else {
                setCurrentValue((prevValue) => prevValue + Math.floor(Math.random() * 10) + 1);
            }
        }

        interval = setInterval(updateCounter, 50);

        // Run animations after the counter completes
        if (animationComplete) {
            const titles = document.querySelectorAll('.logoname');
            const tl = gsap.timeline();

            // Animate the counter
            gsap.to('.counter', {
                duration: 1,
                opacity: 0,
                ease: 'power3.inOut',
                onComplete: () => {
                    // Fade in the logo titles sequentially
                    titles.forEach((title, index) => {
                        tl.to(title, {
                            duration: 0.1,
                            opacity: 1,
                            ease: 'power2.inOut',
                            delay: 0.05 * index,
                            onComplete: () => {
                                // Animate title out
                                gsap.to(title, {
                                    duration: 0.1,
                                    opacity: 0,
                                    ease: 'power2.inOut',
                                    delay: 0.05 * index,
                                    onComplete: () => {
                                        if (index === titles.length - 1) {
                                            // After all titles are animated, fade in ".cairostudio"
                                            gsap.to(".cairostudio", {
                                                opacity: 1,
                                                duration: 2,
                                                ease: 'power2.inOut',
                                                delay: 0.05,
                                                onComplete: () => {
                                                    gsap.to(".cairostudio", {
                                                        opacity: 0,
                                                        duration: 1,
                                                        ease: 'power2.inOut',
                                                        delay: 0.05,
                                                        onComplete: () => {
                                                            // Pull up the bars
                                                            gsap.to('.overlay', {
                                                                duration: 2,
                                                                opacity: 0,
                                                                height: 0,
                                                                stagger: {
                                                                    amount: 0.5,
                                                                },
                                                                ease: 'power3.inOut',
                                                                onComplete: () => {
                                                                    gsap.to('.opening', {
                                                                        y: '-150vh',
                                                                        opacity: 0,
                                                                        display: 'none',
                                                                        ease: 'power3.inOut',
                                                                    });
                                                                    sessionStorage.setItem('hasAnimationShown', 'true')
                                                                },
                                                            });
                                                        },
                                                    })
                                                }
                                            });
                                        }
                                    },
                                });
                            },
                        });
                    });
                },
            });
        }

        return () => {
            clearInterval(interval); // Clear the interval on component unmount
        };
    }, [currentValue, animationComplete]);

    return (
        <div ref={openingRef} className='opening'>
            <h1 className='counter'>{currentValue}</h1>
            <div className="openingAnimation__container">
                <h2 className='logoname'>Graphic Design</h2>
                <h2 className='logoname'>UI/UX</h2>
                <h2 className='logoname'>Branding</h2>
                <h2 className='logoname'>Web Development</h2>
                <h2 className='cairostudio'>Cairo Studio</h2>
            </div>
            <div className='overlay'>
                {[...Array(10)].map((_, index) => (
                    <div className='bar' key={index}></div>
                ))}
            </div>
        </div>
    );
};

export default Opening;
