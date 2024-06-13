'use client';

import Cookies from 'js-cookie';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AnimationContextType {
    hasAnimationShown: boolean;
    setHasAnimationShown: React.Dispatch<React.SetStateAction<boolean>>;
    renderingOpening: boolean;
    setRenderingOpening: React.Dispatch<React.SetStateAction<boolean>>;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const useAnimation = (): AnimationContextType => {
    const context = useContext(AnimationContext);
    if (!context) {
        throw new Error('useAnimation must be used within an AnimationProvider');
    }
    return context;
};

interface AnimationProviderProps {
    children: ReactNode;
}

export const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
    const [hasAnimationShown, setHasAnimationShown] = useState<boolean>(false);
    const [renderingOpening, setRenderingOpening] = useState<boolean>(false);

    useEffect(() => {
        const hasShown = !!Cookies.get("hasAnimationShown");
        setHasAnimationShown(hasShown);
        setRenderingOpening(!hasShown);
    }, []);

    return (
        <AnimationContext.Provider value={{ hasAnimationShown, setHasAnimationShown, renderingOpening, setRenderingOpening }}>
            {children}
        </AnimationContext.Provider>
    );
};

export default AnimationProvider;
