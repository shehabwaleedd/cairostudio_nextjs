import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const useLenis = () => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        lenisRef.current = new Lenis({
            duration: 1.5,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Example easing function
            wheelMultiplier: 1.2,
            touchMultiplier: 2,
        });

        const lenisInstance = lenisRef.current;

        function onFrame(time: number) {
            lenisInstance.raf(time);
            requestAnimationFrame(onFrame);
        }

        requestAnimationFrame(onFrame);

        return () => {
            lenisInstance.destroy();
        };
    }, []);

    const scrollToTop = () => {
        lenisRef.current?.scrollTo(0, { immediate: true });
    };

    return { scrollToTop };
};

export default useLenis;
