'use client'
import React, { ReactNode } from 'react';
import { ReactLenis } from "@studio-freight/react-lenis";
import { AnimatePresence } from 'framer-motion';
interface SmoothScrollingProps {
    children: ReactNode;
}

const SmoothScrolling: React.FC<SmoothScrollingProps> = ({ children }) => {
    return (
        <AnimatePresence mode='wait'>
            <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true, smartTouch: true, touchMultiplier: 2, multiplier: 1, direction: 'vertical' }}>
                {children}
            </ReactLenis>
        </AnimatePresence>
    );
}

export default SmoothScrolling;